import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProblemCard = (props) => {
  return (
    <div>
    {/* react bootstrap card */}
    <Card style={{ width: '18rem' }}>
      
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            <Button variant="primary" onClick={()=>window.open(props.url,'_blank')}>Solve</Button>
        </Card.Body>
    </Card>


    </div>
  )
}

export default ProblemCard