"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

export function AccordionProduct() {
  

  let [getsub, setsub] = useState([])
  let viewSubData = () => {
    axios.get(`http://localhost:8080/website/home/view-subcat`)
      .then((ress) => {
        return ress.data
      })
      .then((finalRess) => {
        if (finalRess.status == 1) {
          setsub(finalRess.data)
        }
      })
  }
  let [getSize, setSize] = useState([])

  let getSizeData = () => {
    axios.get(`http://localhost:8080/website/home/view-size`)
      .then((ress) => {
        return ress.data
      })
      .then((FinalRess) => {
        if (FinalRess.status == 1) {
          setSize(FinalRess.data)

        }

      })

  }
  let [getColor, setColor] = useState([])
  let ColorFunction = () => {
    axios.get(`http://localhost:8080/website/home/view-color`)
      .then((ress) => {
        return ress.data
      })
      .then((finalRess) => {
        if (finalRess.status == 1) {
          setColor(finalRess.data)
        }
      })
  }
  useEffect(() => {
    viewSubData()
    getSizeData()
    ColorFunction()

  }, [])


  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>SubCategory</Accordion.Header>
        <Accordion.Body>


          <div className='gap-3 tops'>

            {getsub.map((items) => {
              return (
                <div className='subcatdata'>
                  <div>
                    <p>{items.SubCategoryName}-</p>
                  </div>
                  <div>
                    <input type="checkbox" className='' />
                  </div>


                </div>
              )
            })}




          </div>


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Size</Accordion.Header>
        <Accordion.Body>




          {getSize.map((items) => {
            return (
              <div className='shrt'>

                <div className=''>
                  <p className='p-2'>{items.AddSize}</p>
                </div>

                <div>
                  <input type="checkbox" className='' />
                </div>
              </div>
            )
          })}

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Colour</Accordion.Header>
        <Accordion.Body>
          {getColor.length >= 1 ?
            getColor.map((items) => {
              return (
                <div className='d-flex gap-2'>
                  <p className='bgall'></p>
                  <p>{items.ColorName}</p>

                </div>
              )
            })
            :
            'please wait..'
          }



        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
         
              <div className='d-flex gap-3 tops'>
              <input type="checkbox" />
              <p className=''>$500-$1000</p>
            </div>
             


        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

/* export default AccordionProduct; */