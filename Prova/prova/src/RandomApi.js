import React , {useEffect, useState} from 'react';
import DadoApi from './ApiDados';

function RandomApi(){
  const [person,setPerson] = React.useState()

  function loadPerson(){
    fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data)=>{
      console.log(data);
      setPerson(data.result[0]);
    });
  }

  useEffect (()=>{
    loadPerson();
  },[]);

  if(person){
    const name = person.name.title + " " + person.name.first + " " + person.name.last + "."
    const address = person.location.street.name+ " " + person.location.street.number + "."
    const email = person.email
    const date = person.dob.date
    const phone = person.phone

    return(
      <div>
        <DadoApi name={name} email={email} date={date} address={address} phone={phone}/>

      </div>
    )
  }

}
export default RandomApi
