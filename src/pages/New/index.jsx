import { Container, Form, Textarea } from './styles';
import { FiChevronLeft, FiUpload } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { TextLink } from '../../components/TextLink';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { AddIngredients } from '../../components/AddIngredients';

export function New() {
  return (
    <Container>
      <Header />
      <TextLink name="voltar" icon={FiChevronLeft} />
      <main>
        <Form>
          <h1>Novo prato</h1>

          <div id='threeColumns'>
           <div className="input-wrapper">
              <label htmlFor="image">Imagem do prato</label>
              <div>
               <span>
                <FiUpload /> Selecione a imagem
               </span>
               <Input 
                id="image"
                accept="image/png, image/jpeg"
                type="file"
                style={{ cursor: 'pointer' }}  
               />
             </div>
           </div>

           <Input id="name" label="Nome" placeholder="Salada Ceaser" />

           <div>
             <label htmlFor="category">Categoria</label>
             <select id="category">
              <option value="Refeição">Refeição</option>
              <option value="Pratos principais">Pratos principais</option>
              <option value="Entrada">Entrada</option>
             </select>
           </div>
         </div>

         <div id="twoColumns">
           <div>
             <label htmlFor="add">Ingredientes</label>
             <div>
              <AddIngredients value="Pão" size="6" />
              <AddIngredients value="Feijão" size="4" />
              <AddIngredients id="add" isNew size="6" />
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
            placeholder="Sobre o prato, ingredientes e composição" />
         </div>

         <Button type="button" id="buttonAdd" title="Salvar alterações" />
        </Form>
      </main>
      <Footer />
    </Container>
  );
}