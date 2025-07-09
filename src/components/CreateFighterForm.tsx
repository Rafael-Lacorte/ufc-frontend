import { useMutation, useQuery } from '@tanstack/react-query'
import '../style/CreateFighterForm.css'
import axios from 'axios'
import { useState, type ChangeEvent } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function CreateFightersForm() {

  const [formData, setFormData] = useState({
    fullName: '',
    nickName: '',
    birthDate: '',
    height: '',
    division: '',
    nationality: '',
    city: '',
    wins: '',
    losses: '',
    draws: '',
  });

  type FighterPayload = {
  fullName: string;
  nickName: string;
  birthDate: string;
  height: number;
  division: string;
  nationality: string;
  city: string;
  wins: number;
  losses: number;
  draws: number;
};


  const mutation = useMutation({
    mutationFn: (body: FighterPayload) => {
      return axios.post(`${API_BASE_URL}/fighter`, body)
    },
    onSuccess: () => {
      alert('Fighter created successfully');
    },
    onError:() => {
      alert('Failed to create fighter')
    }
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({...prev, [name]:value}))
  };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      ...formData,
      height: parseFloat(formData.height),
      wins: parseInt(formData.wins),
      losses: parseInt(formData.losses),
      draws: parseInt(formData.draws),
    };

    mutation.mutate(body);
  };

  return (
  <div>
    <h1>Register a Fighter</h1>
    <form className='create-fighter-form' onSubmit={handleSubmit}>
        <label htmlFor="full-name"> Full name:
            <input type='text' name='fullName' id='full-name' placeholder='Full name' onChange={handleChange} required></input>
        </label>
        <label htmlFor="nick-name"> Nickname:
            <input type='text' name='nickName' id='nick-name' placeholder='Nickname' onChange={handleChange}></input>
        </label>
        <label htmlFor="nationality"> Nationality:
            <input type='text' name='nationality' id='nationality' placeholder='Brazil' onChange={handleChange} required></input>
        </label>
        <label htmlFor="city"> City:
            <input type='text' name='city' id='city' placeholder='City' onChange={handleChange} required></input>
        </label>
        <label htmlFor="birth-date">Birth Date:
            <input type='date' name='birthDate' id='birth-date' onChange={handleChange} required></input>
        </label>
        <label htmlFor="Height">Height (m):
            <input type="number" name="height" id='height' step="0.01" placeholder="e.g. 1.80" min="1.4" max="2.2" onChange={handleChange} required></input>
        </label>
        <label htmlFor="division">Division:
            <select name='division' id='division' value={formData.division} onChange={handleChange} required>
                <option value="flyweight">Flyweight</option>
                <option value="bantamweight">Bantamweight</option>
                <option value="featherweight">Featherweight</option>
                <option value="Lightweight">Lightweight</option>
                <option value="weltertweight">Weltertweight</option>
                <option value="middleweight">Middleweight</option>
                <option value="light_heavyweight">Light Heavyweight</option>
                <option value="heavyweight">Heavyweight</option>
            </select>
        </label>
        <label htmlFor="wins">Wins:
            <input type='number' name='wins' id='wins' min='0' max='99' placeholder="e.g. 10" onChange={handleChange}  required></input>
        </label>
        <label htmlFor="losses">Losses:
            <input type='number' name='losses' id='losses' min='0' max='99' placeholder="e.g 2" onChange={handleChange}  required></input>
        </label>
        <label htmlFor="full-name">Draws:
            <input type='text' name='draws' id='draws' min='0' max='99' placeholder="e.g. 1" onChange={handleChange}  required></input>
        </label>
        <button type='submit'>
          SUBMIT
        </button>
    </form>
  </div>

  )
}

export default CreateFightersForm;
