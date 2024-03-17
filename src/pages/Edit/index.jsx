/* eslint-disable no-unused-vars */
import { FiChevronLeft, FiUpload } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { TextLink } from '../../components/TextLink'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Select } from '../../components/Select'
import { AddIngredients } from '../../components/AddIngredients'

import { Container, Form, Textarea } from './styles'

export function Edit() {
  const [photoFile, setPhotoFile] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('meal')
  const [price, setPrice] = useState(0)
  const [description, setDescripation] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredients, setNewIngredients] = useState('')

  const navigate = useNavigate()
  const { id } = useParams()

  async function updateDish() {
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

    if (photoFile) {
      const fileUploadForm = new FormData()
      fileUploadForm.append('photo', photoFile)

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

  function handleUploadPhoto(event) {
    const file = event.target.files[0]
    setPhotoFile(file)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${id}`)

      const dish = response.data

      setName(dish.name)
      setIngredients(dish.ingredients.map((ingredients) =>
      ingredients.name))
      setPrice(dish.price)
      setDescripation(dish.description)
      setCategory(dish.category)
    }

    fetchDish()
  }, [id])

  return (
    <Container>
      
      <div className="wrapper">
        <TextLink name="voltar" icon={FiChevronLeft} to={-1}/>
      </div>
      
      <main>
        <Form onSubmit={(e) => e.preventDefault()}>
          <h1>Editar prato</h1>

          <div id='threeColumns'>
            <div className='input-wrapper'>
              <label htmlFor="image">Imagem do prato</label>
              <div>
                <span>
                  <FiUpload />{' '} {photoFile ? photoFile.name : 'Selecione a imagem'}
                </span>
                <Input 
                 id="image"
                 accept='image/png, image/jpeg'
                 type="file" 
                 style={{ cursor: 'pointer' }}
                 onChange={handleUploadPhoto}
                />
              </div>
            </div>

            <Input 
              id="name" 
              label="Nome" 
              placefolder="Salada Ceaser"
              required
              value={name}
              onChange={(e) => setName(e.target.value)} 
            />

            <div>
            <label htmlFor="category">Categoria</label>
              <select 
                id="category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="Refeição">Refeição</option>
                <option value="Pratos principais">Sobremesa</option>
                <option value="Entrada">Bebida</option>
              </select>
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div id="textarea">
            <label htmlFor="description">Descrição</label>
            <Textarea
              id="description"
              placeholder="Sobre o prato, seus ingredientes e composição"
              value={description}
              onChange={(e) => setDescripation(e.target.value)}
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
              onClick={updateDish} 
            />
          </div>
        </Form>
      </main>
      
    </Container>
  )
}