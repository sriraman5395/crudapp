import React,{useEffect,useState} from 'react'
import {  Label,  Table ,Button} from 'semantic-ui-react'
import axios from 'axios'


function Read() {
    const [apiData,setApidata]= useState([])
    useEffect(()=>{
        axios.get('https://63237c8c5c1b43572796bfad.mockapi.io/Crud')
        .then((getData) => {
            setApidata(getData.data);
        })
    })
  return (
    <div>
          <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
      </Table.Row>
 
    </Table.Header>

    <Table.Body>
        {apiData.map((data)=>{
            return(
                <Table.Row>
                <Table.Cell>
                  <Label ribbon>{data.id}</Label>
                </Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell><Button color='green'>Add</Button></Table.Cell>
                <Table.Cell><Button color='red'>Delete</Button></Table.Cell>
              </Table.Row>
        
            )
        })}
  
    </Table.Body>


  </Table>
    </div>
  )
}

export default Read