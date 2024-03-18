/* eslint-disable react/prop-types */
import { FiSearch } from 'react-icons/fi'
import { Input } from '../../../Input'
import { useLocation } from 'react-router-dom'

import { SearchContainer } from './styles.js'

export function Search({ onSetSearch, id }) {
  const { pathname } = useLocation()

  return (
    <SearchContainer id={id}>
      <FiSearch />
      <Input
        type="search"
        placeholder="Busque por pratos ou ingredientes"
        onChange={(e) => onSetSearch(e.target.value)}
        disabled={pathname !== '/'}
      />
    </SearchContainer>
  )
}