/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react"
import { IoReceiptOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'

import InputMask from 'react-input-mask'
import creditCard from '../../assets/icons/cardcredit.svg'
import pix from '../../assets/icons/pix.svg'
import qrCode from '../../assets/icons/qr-code.svg'
import knifeFork from '../../assets/icons/knifeFork.svg'
import check from '../../assets/icons/check.svg'
import clock from '../../assets/icons/clock.svg'
import { Button } from '../Button'

import { Container } from './styles'
import { PurchaseContext } from '../../contexts/purchase'
import { useContextSelector } from 'use-context-selector'
import { useForm } from 'react-hook-form'

export function ItemPayment() {
  const [pixSelected, setPixSelected] = useState(true)
  const [purchase, setPurchase] = useState('initial')
  const [pixCode, setPixCode] = useState('')
  
  const inputCopy = useRef()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm()
  
  const { createPurchase, userPurchases, userRequests } = useContextSelector(
    PurchaseContext,
    ({ createPurchase, userPurchases, userRequests }) => ({
      createPurchase,
      userPurchases,
      userRequests,
    }),
  )

  function copyText() {
    inputCopy.current.select()
    inputCopy.current.setSelectionRange(0, 99999)

    const text = inputCopy.current.value
    if (!navigator.clipboard) {
      document.execCommand('copy')
    } else {
      navigator.clipboard.writeText(text)
    }
  }

  async function handlePurchase(data) {
    console.log(data); // Verifica se os dados do cartão estão sendo recebidos corretamente
  
    if (userRequests.length === 0) {
      return toast.warn('Adicione ao menos um item no carrinho');
    }
  
    if (!data.numberCard || !data.validityCard || !data.CVCCard) {
      return toast.warn('Informe todos os dados do cartão');
    }
    
    await createPurchase();
    console.log('Purchase created'); // Verifica se a compra está sendo criada corretamente
    toast.success('Recebemos seu pedido, receba em breve na sua casa!');
    setPurchase('await');
  }

  useEffect(() => {
    if (userRequests.length !== 0) {
      setPurchase('initial')
      return
    }
    const lastPurchase = userPurchases[userPurchases.length -1]
    if (lastPurchase) {
      
      if (lastPurchase.status === 'pending') {
        setPurchase('await')
      } else if (lastPurchase.status === 'preparing') {
        setPurchase('pay')
      } else {
        setPurchase('delivered')
      }
    } else {
      setPurchase('initial')
    }
  }, [userPurchases, userRequests.length])

  useEffect(() => {
    const randomPixCode = (len) => {
      let code = ''

      do {
        code += Math.random().toString(36).slice(2);
      } while (code.length < len)

      code = code.slice(0, len)

      return code
    };

    setPixCode(randomPixCode(30))
  }, [])

  return (
    <Container>
      <div id="buttons">
        <button
          className={pixSelected ? 'selected' : ''}
          onClick={() => setPixSelected(true)}
        >
          <img src={pix} alt="ícone pix" />
          PIX
        </button>

        <button
          className={pixSelected ? '' : 'selected'}
          onClick={() => setPixSelected(false)}
        >
          <img src={creditCard} alt="ícone de um cartão bancario" />
          Crédito
        </button>
      </div>

      <div className="payment">
        {pixSelected && purchase === 'initial' && (
          <>
          <img src={qrCode} alt="Qr-code" />
          <div className="copy-wrapper">
            <input type="text" readOnly value={pixCode} ref={inputCopy} />

            <button onClick={copyText}>copy</button>
          </div>
          </>
        )}

        {!pixSelected && purchase === 'initial' && (
          <form onSubmit={handleSubmit(handlePurchase)}>
            <div className="input-wrapper">
              <label htmlFor="card">Número do cartão</label>
              <InputMask
                id="card"
                type="text"
                mask="9999 9999 9999 9999"
                placeholder="0000 0000 0000 0000"
                {...register('numberCard')}
              />              
            </div>

            <div id="twoColumns">
              <div className="input-wrapper">
                <label htmlFor="validity">Validade</label>
                <input
                  id="validity" 
                  type="text"
                  mask="99/99"
                  placeholder="04/07"
                  {...register('validityCard')}
                />
              </div>

              <div className="input-wrapper">
                <label htmlFor="codeCard">CVC</label>
                <input 
                  id="codeCard"
                  type="text"
                  mask="999" 
                  placeholder="000"
                  {...register('CVCCard')}
                />
              </div>
            </div>

            <Button
              icon={IoReceiptOutline}
              title="Finalizar pagamento"
              disabled={isSubmitting}
              type="submit"
            />
          </form>
        )}

        {purchase !== 'initial' && (
          <div id='state'>
            {purchase === 'await' && (
              <>
                <img src={clock} alt="ícone de um relógio" />
                <p>Aguardando pagamento no caixa</p>
              </>
            )}
            {purchase === 'pay' && (
              <>
                <img src={check} alt="ícone de afirmação" />
                <p>Pagamento aprovado</p>
              </>
            )}
            {purchase === 'delivered' && (
              <>
                <img src={knifeFork} alt="ícone de uma faca e garfo" />
                <p>
                  Seu ultimo pedido foi entregue! <br />{' '}
                  <span>
                    Adicione algo ao carrinho para fazer um novo pedido
                  </span>
               </p>
              </>
            )}
          </div>
        )}
      </div>
    </Container>
  )
}