/* eslint-disable no-unused-vars */
import { Container, Form, Textarea } from './styles';
import { FiChevronLeft, FiUpload } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { TextLink } from '../../components/TextLink';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { AddIngredients } from '../../components/AddIngredients';

export function New() {
  const [photoFile, setPhotoFile] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('meals');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState('');

  const navigate = useNavigate();

  async function newDish() {
    const notANumber = isNaN(price) || price === '';

    if (!name || price < 0 || notANumber) {
      return;
    }

    if (newIngredients != '') {
      return toast.warn(
        `Clique no + para adicionar o ingrediente tag: ${newIngredients}. ou limpe o campo!`
      );
    }

    if (ingredients.length === 0) {
      return toast.warn('Informe ao menos o ingrediente principal do prato!');
    }

    const response = await api.post('/dishes', {
      name,
      category,
      price,
      description,
      ingredients,
    });

    const id = response.data.id;

    if (photoFile) {
      const fileUploadForm = new FormData();
      fileUploadForm.append('photo', photoFile);

      await api.patch(`dishes/photo/${id}`, fileUploadForm);
    }

    navigate('/');
    setName('');
    setIngredients([]);
    setPrice('');
    setDescription('');
  }

  function handleNewIngredients() {
    if (newIngredients) {
      const isNewIngredients = !ingredients.includes(newIngredients);
      if (isNewIngredients) {
        setIngredients((prevState) => [...prevState, newIngredients]);        
      } else {
        toast.warn('Ingrediente já adicionado');
      }
    }

    setNewIngredients('');
    document.getElementById('add').focus();
  }

  function handleRemoveIngredients(ingredientsDeleted) {
    setIngredients((prevState) => prevState.filter((ingredients) =>
    ingredients !== ingredientsDeleted)
    );
  }

  function handleUploadPhoto(event) {
    const file = event.target.files[0];
    setPhotoFile(file);
  }

  return (
    <Container>
      <Header />
      
      <div className="wrapper">
        <TextLink name="voltar" icon={FiChevronLeft} to={-1}/>
      </div>
      
      <main>
        <Form onSubmit={(e) => e.preventDefault()}>
          <h1>Novo prato</h1>

          <div id='threeColumns'>
           <div className="input-wrapper">
              <label htmlFor="image">Imagem do prato</label>
              <div>
               <span>
                <FiUpload />{' '}
                {photoFile ? photoFile.name : 'Selecione a imagem'}
               </span>
               <Input 
                id="image"
                accept="image/png, image/jpeg"
                type="file"
                style={{ cursor: 'pointer' }}
                onChange={handleUploadPhoto}  
               />
             </div>
           </div>

           <Input 
            id="name" 
            label="Nome" 
            placeholder="Salada Ceaser"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

           <div>
             <label htmlFor="category">Categoria</label>
             <Select 
              id="category"
              onChange={(e) => setCategory(e.target.value)}
             >
              <option value="Refeição">Refeição</option>
              <option value="Pratos principais">Pratos principais</option>
              <option value="Entrada">Entrada</option>
             </Select>
           </div>
         </div>

         <div id="twoColumns">
           <div>
             <label htmlFor="add">Ingredientes</label>
             <div>
             {ingredients.map((ingredients, index) => (
              <AddIngredients 
                key={String(index)} 
                value={ingredients}
                onClick={(e) => 
                handleRemoveIngredients(ingredients)}
                size={String(ingredients.length)} 
              />
             ))}
        
              <AddIngredients 
                id="add" 
                isNew 
                size="6"
                value={newIngredients}
                onChange={(e) =>
                setNewIngredients(e.target.value)}
                onClick={handleNewIngredients}
              />
             </div>
           </div>
            
            <Input
             id="price"
             type="number"
             label="Preço"
             placeholder="R$ 00,00"
             min="0"
            />          
         </div>

         <div id="textarea">
          <label htmlFor="description">Descrição</label>
          <Textarea
            id="description"
            placeholder="Sobre o prato, ingredientes e composição"
            value={description}
            onChange={(e) => 
            setDescription(e.target.value)}
          />
         </div>

         <Button id="buttonAdd" title="Salvar alterações" onClick={newDish} />
        </Form>
      </main>
      <Footer />
    </Container>
  );
}