import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Reviews({reviews}) {
    console.log(reviews);
    const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant='danger'
      >
        Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
                {
                   reviews.map(item=>(
                    <div>
                        <h5>{item.name}</h5>
                        <p>{item.date}</p>
                        <p>{item.rating}</p>
                        <h6>{item.comments}</h6>
                        <hr></hr>
                    </div>
                    
                   )) 
                }
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  )
}

export default Reviews