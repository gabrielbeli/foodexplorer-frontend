/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Container, Form, Textarea } from './styles'
import { FiChevronLeft, FiUpload } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'

import { api } from '../../services/api'

import { TextLink } from '../../components/TextLink'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Button } from '../../components/Button'
import { AddIngredients } from '../../components/AddIngredients'
import { useForm } from 'react-hook-form'

export function New() {
  const [ingredients, setIngredients] = useState([])
  const [newIngredients, setNewIngredients] = useState('')

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      photo: null,
      name: '',
      category: 'meal',
      price: 0,
    },
  })

  const photoFile = watch('photo')

  function handleNewIngredient() {
    if (newIngredients) {
      const isNewIngredient = !ingredients.includes(isNewIngredient)
      if (isNewIngredient) {
        setIngredients((prevState) => [...prevState, isNewIngredient])
      } else {
        toast.warn('Ingredient já Adicionado!')
      }
    }

    setNewIngredients('')
    document.getElementById('add').focus()
  }

  function handleRemoveIngredient(ingredientDeleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== ingredientDeleted),
    )
  }

  async function handleCreateNewDishForm(data) {
    const photo = data.photo ? data.photo[0] : null
    const { name, category, price, description } = data

    const notANumber = isNaN(price) || price === ''
    if (!name || price < 0 || notANumber) {
      return
    }

    if (newIngredients !== '') {
      return toast.warn(
        `Clique no + para adicionar o ingrediente tag: ${newIngredients}. ou limpe o campo!`
      )
    }

    if (ingredients.length === 0) {
      return toast.warn('Informe ao menos o ingrediente principal do prato!')
    }

    const response = await api.post('/dishes', {
      name,
      category,
      price,
      description,
      ingredients,
    })

    const id = response.data.id

    if (photo) {
      const fileUploadForm = new FormData()
      fileUploadForm.append('photo', photo)

      await api.patch(`dishes/photo/${id}`, fileUploadForm)
    }

    toast.success('Prato adicionado!')
    navigate('/')
    reset()
    setIngredients([])   
  }

  return (
    <Container>
      
      <div className="wrapper">
        <TextLink name="voltar" icon={FiChevronLeft} to={-1}/>
      </div>
      
      <main>
        setIngredients
        <Form onSubmit={handleSubmit(handleCreateNewDishForm)}>
          <h1>Novo prato</h1>

          <div id='threeColumns'>
           <div className="input-wrapper">
              <label htmlFor="image">Imagem do prato</label>
              <div>
               <span>
                <FiUpload />{' '}
                {photoFile ? photoFile[0].name : 'Selecione a imagem'}
               </span>
               <Input 
                id="image"
                accept="image/png, image/jpeg"
                type="file"
                style={{ cursor: 'pointer' }}
                {...register('photo')}  
               />
             </div>
           </div>

           <Input 
            id="name" 
            label="Nome" 
            placeholder="Salada Ceaser"
            required
            {...register('name')}
            />

           <div>
             <label htmlFor="category">Categoria</label>
             <Select 
              id="category"
              {...register('category')}
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
                onClick={() => 
                handleRemoveIngredient(ingredients)}
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
                onClick={handleNewIngredient}
              />
             </div>
           </div>
            
            <Input
             id="price"
             type="number"
             label="Preço"
             placeholder="R$ 00,00"
             min="0"
             step="0.010"
             {...register('price')}
            />          
         </div>

         <div id="textarea">
          <label htmlFor="description">Descrição</label>
          <Textarea
            id="description"
            placeholder="Sobre o prato, ingredientes e composição"
            {...register('description')}
          />
         </div>

         <Button id="buttonAdd" title="Adicionar" disabled={isSubmitting} />
        </Form>
      </main>
    </Container>
  )
}