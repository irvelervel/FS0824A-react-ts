import { Card } from 'react-bootstrap'
import IBook from '../types/Book'

interface SingleBookProps {
  book: IBook
}

const SingleBook = (props: SingleBookProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.book.imageUrl} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>{props.book.description}</Card.Text>
        <Card.Text>{props.book.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
