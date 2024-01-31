import React, { useState } from 'react';
import './style.css';

function InputSection() {
  const [value, setValue] = useState('');
  const [newtodo, setNewtodo] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Default language is 'en'

  const handleChange = (e) => {
    e.preventDefault();
    setNewtodo([...newtodo, value]);
    setValue('');
  };

  const translations = {
    add: {
      en: 'Add',
      es: 'Agregar',
      fr: 'Ajouter',
    },
    update: {
      en: 'Update',
      es: 'Actualizar',
      fr: 'Mettre à jour',
    },
    delete: {
      en: 'Delete',
      es: 'Eliminar',
      fr: 'Supprimer',
    },
  };

  const handleUpdate = (index) => {
    const updatedTodo = prompt(translations.update[currentLanguage], newtodo[index]);
    if (updatedTodo !== null) {
      const updatedTodos = [...newtodo];
      updatedTodos[index] = updatedTodo;
      setNewtodo(updatedTodos);
    }
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(translations.delete[currentLanguage]);
    if (confirmDelete) {
      const updatedTodos = [...newtodo];
      updatedTodos.splice(index, 1);
      setNewtodo(updatedTodos);
    }
  };

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <div className="inputContainer">
      <h1>CRUD Web App</h1>
      <div className='languagecontainer'>
        <select value={currentLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
      </div>
      <div className="inputdiv">
        <input
          type="text"
          value={value}
          className="inputfield"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="addBtn" onClick={handleChange}>
          {translations.add[currentLanguage]}
        </button>
      </div>

      {newtodo &&
        newtodo.map((item, i) => (
          <div className="todoItem" key={i}>
            <p className="itemtag">{item}</p>
            <button className="updatebtn" onClick={() => handleUpdate(i)}>
              {translations.update[currentLanguage]}
            </button>
            <button className="deletebtn" onClick={() => handleDelete(i)}>
              {translations.delete[currentLanguage]}
            </button>
          </div>
        ))}
    </div>
  );
}

export default InputSection;
