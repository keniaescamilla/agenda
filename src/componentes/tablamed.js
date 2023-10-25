import React, { useState } from 'react';
import '../App.css';
import MedicationForm from './MedicationForm';

function MedicationTable() {
  const [medications, setMedications] = useState([]);

  const handleAddMedication = (newMedication) => {
    setMedications([...medications, newMedication]);
  };

  return (
    <div>
      <link rel="stylesheet" href="app.css" />
      <h1>CUADRO DE MEDICAMENTOS</h1>

      <table className="container">
        <thead>
          <tr>
            <th></th>
            <th>Medication</th>
            <th>Dosage</th>
            <th>Time</th>
            <th>Date</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {medications.map((medication, index) => (
            <tr key={index}>
              <td>{medication.moment}</td>
              <td>{medication.medication}</td>
              <td>{medication.dosage}</td>
              <td>{medication.time}</td>
              <td>{medication.date}</td>
              <td>{medication.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button id="addMedication">Agregar Medicamento</button>
      <MedicationForm onAddMedication={handleAddMedication} />
    </div>
  );
}

export default MedicationTable;
