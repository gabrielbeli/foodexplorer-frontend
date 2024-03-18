/* eslint-disable no-unused-vars */
import { FiChevronLeft, FiUpload } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { api } from '../../services/api'

import { TextLink } from '../../components/TextLink'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Select } from '../../components/Select'
import { AddIngredients } from '../../components/AddIngredients'
import { useForm } from 'react-hook-form'

import { Container, Form, Textarea } from './styles'

export function Edit() {
  const [ingredients, setIngredients] = useState([])
  const [newIngredients, setNewIngredients] = useState('')

  const navigate = useNavigate()
  const { id } = useParams()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm()

  const photoFile = watch('photo')

  async function handleUpdateDishForm(data) {
    const photo = data.photo ? data.photo[0] : null
    const { name, category, price, description } = data
    
    const notANumber = isNaN(price) || price === ''

    if (!name || price < 0 || notANumber) {
      return
    }  

    if (newIngredients !== '') {
      return toast.warn(
        `Clique o + para adicionar o ingrediente tag: ${newIngredients}. ou limpe o campo!`,
      )
    }

  try {
    await api.put(`/dishes/${id}`, {
      name,
      category,
      price,
      description,
      ingredients,
    })

    if (photo) {
      const fileUploadForm = new FormData()
      fileUploadForm.append('photo', photo)

      await api.patch(`dishes/photo/${id}`, fileUploadForm);
    }

    toast.success('Prato atualizado!')
    navigate(-1)
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message)
    } else {
      toast.error('Não foi possível atualizar!')
    }
  }
}

  async function removeDish() {
    const confirmation = confirm(`Certeza que deseja remover o ${name}`)
    if (confirmation) {
      await api.delete(`/dishes/${id}`)
      toast.sucess('Prato removido!')
      navigate('/')
    }
  }

  function handleNewIngredients() {
    if (newIngredients) {
      const isNewIngredients = !ingredients.includes(newIngredients)
      if (isNewIngredients) { setIngredients((prevState) => [
        ...prevState, newIngredients])
      } else {
        toast.warn('Ingrediente já adicionado')
      }
    }

    setNewIngredients('');
    document.getElementById('add').focus();
  }

  function handleRemoveIngredients(ingredientsDeleted) {
    setIngredients((prevState) => prevState.filter((ingredients) => ingredients !==
    ingredientsDeleted),
    )
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${id}`)

      const dish = response.data

      setIngredients(dish.ingredients.map((ingredients) =>
      ingredients.name))

      if (dish) {
        reset({
          name: dish.name,
          price: dish.price,
          description: dish.description,
          category: dish.category,
          photo: null,
        })
      }
    }

    fetchDish()
  }, [id, reset])

  return (
    <Container>
      
      <div className="wrapper">
        <TextLink name="voltar" icon={FiChevronLeft} to={-1}/>
      </div>
      
      <main>
        <Form onSubmit={handleSubmit(handleUpdateDishForm)}>
          <h1>Editar prato</h1>

          <div id='threeColumns'>
            <div className='input-wrapper'>
              <label htmlFor="image">Imagem do prato</label>
              <div>
                <span>
                  <FiUpload />{' '} {photoFile ? photoFile[0]?.name : 'Selecione a imagem'}
                </span>
                <Input 
                 id="image"
                 accept='image/png, image/jpeg'
                 type="file" 
                 style={{ cursor: 'pointer' }}
                 {...register('photo')}
                />
              </div>
            </div>

            <Input 
              id="name" 
              label="Nome" 
              placefolder="Salada Ceaser"
              required
              {...register('name')}
            />

            <div>
            <label htmlFor="category">Categoria</label>
              <Select id="category" {...register('category')}>
                <option value="Refeição">Refeição</option>
                <option value="Pratos principais">Sobremesa</option>
                <option value="Entrada">Bebida</option>
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
                    onClick={() => handleRemoveIngredients(ingredients)}
                    size={String(ingredients.length)}
                  />
                ))}

                <AddIngredients
                  id="add"
                  isNew
                  size="6"
                  value={newIngredients}
                  onChange={(e) => setIngredients(e.target.value)}
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
              step="0.010"
              {...register('price')}
            />
          </div>

          <div id="textarea">
            <label htmlFor="description">Descrição</label>
            <Textarea
              id="description"
              placeholder="Sobre o prato, seus ingredientes e composição"
              {...register('description')}
            />
          </div>

          <div>
            <Button 
              type="button" 
              id="buttonRemove" 
              title="Excluir prato" 
              onClick={removeDish} 
            />
            <Button 
              id="buttonAdd" 
              title="Salvar alterações"
              onClick={isSubmitting} 
            />
          </div>
        </Form>
      </main>
      
    </Container>
  )
}