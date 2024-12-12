import { useEffect, useState } from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Row } from 'react-bootstrap'
import IBook from '../types/Book'

const FoodBooks = () => {
  const [books, setBooks] = useState<IBook[]>([])

  const BOOKS_URL = 'https://striveschool-api.herokuapp.com/food-books'

  const getBooks = async () => {
    fetch(BOOKS_URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore nella fetch')
        }
      })
      .then((arrayOfBooks: IBook[]) => {
        console.log('arrayOfBooks', arrayOfBooks)
        setBooks(arrayOfBooks)
      })
      .catch((error) => {
        console.log(error)
      })

    // async/await
    // try {
    //   const response = await fetch(BOOKS_URL)
    //   if (response.ok) {
    //     const arrayOfBooks = await response.json()
    //     console.log('arrayOfBooks', arrayOfBooks)
    //   } else {
    //     throw new Error('errore nella fetch')
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div>
      <h2>Food Books!</h2>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            {books.map((b) => {
              // b è l'oggetto con title, id etc.
              return <SingleBook book={b} />
            })}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FoodBooks
