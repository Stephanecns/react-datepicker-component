

---

# Composant React CustomDatePicker

Ce dépôt contient un composant React qui remplace le plugin jQuery `datetimepicker` en tant que sélecteur de date. Il permet aux utilisateurs de sélectionner une date facilement dans les applications React.

## Fonctionnalités

- **Basé sur React** : Converti à partir du plugin jQuery `datetimepicker`.
- **Format de date personnalisable** : Le format par défaut est `MM/dd/yyyy`, mais il peut être modifié selon vos besoins.
- **Réutilisable** : Ce composant peut être intégré et réutilisé dans n'importe quelle application React.
- **Stylisable** : Personnalisez le style du sélecteur de date selon les exigences de votre projet.

## Installation

1. Clonez ce dépôt dans votre projet :

   ```bash
   git clone https://github.com/ton-compte-github/custom-datepicker.git
   ```

2. Installez les dépendances requises :

   ```bash
   npm install react-datepicker
   ```

3. Importez et utilisez le composant dans votre projet React :

   ```javascript
   import CustomDatePicker from './CustomDatePicker';
   ```

## Utilisation

```jsx
import React, { useState } from 'react';
import CustomDatePicker from './CustomDatePicker';

const MyComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <h1>Sélectionnez une date</h1>
      <CustomDatePicker
        label="Date de naissance"
        selectedDate={selectedDate}
        onChange={setSelectedDate}
      />
    </div>
  );
};

export default MyComponent;
```

## Propriétés du composant

- **label** : Label du champ de sélection de date (ex : "Date de naissance").
- **selectedDate** : La date actuellement sélectionnée.
- **onChange** : Fonction pour mettre à jour la date sélectionnée.

## Personnalisation

Vous pouvez personnaliser le composant en passant des classes CSS et en modifiant les styles via le fichier CSS associé à `react-datepicker`.

---

