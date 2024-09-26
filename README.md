
---

# Composant React CustomDatePicker

Ce dépôt contient un composant React qui remplace le plugin jQuery `datetimepicker` en tant que sélecteur de date. Il permet aux utilisateurs de sélectionner une date facilement dans les applications React.

## Fonctionnalités

- **Basé sur React** : Converti à partir du plugin jQuery `datetimepicker`.
- **Format de date personnalisable** : Le format par défaut est `MM/dd/yyyy`, mais il peut être modifié.
- **Réutilisable** : Ce composant peut être intégré et réutilisé dans n'importe quelle application React.
- **Stylisable** : Personnalisez le style du sélecteur de date selon les exigences de votre projet.

## Installation

Pour installer ce composant via **npm**, exécutez la commande suivante dans votre projet React :

```bash
npm install react-datepicker-component-stephoc

```

## Utilisation

Voici un exemple d'utilisation dans un projet React :

```js
import React, { useState } from 'react';
import CustomDatePicker from 'react-datepicker-component';

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

- **label** : *string* - Label du champ de sélection de date (ex : "Date de naissance").
- **selectedDate** : *Date* - La date actuellement sélectionnée.
- **onChange** : *function* - Fonction pour mettre à jour la date sélectionnée.
- **className** : *string* - (optionnel) Classes CSS pour personnaliser le style.

## Personnalisation

Vous pouvez personnaliser le composant en passant des classes CSS ou en modifiant les styles via le fichier CSS associé à `react-datepicker`.

## Licence

Ce projet est sous licence MIT.

---


