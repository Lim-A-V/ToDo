import { useState } from 'react';
import './Form.scss'
import { useDispatch } from 'react-redux';
import { inpuitNameAction } from '../../faeture/form';

export const Form = (proms: {craeteNewToDo: Function }) => {

   const dispatch = useDispatch()

   const formSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault();
      if (text) {
         proms.craeteNewToDo();
         setText('')
      }
   }

   const [text, setText] = useState<string>('');

   const inputText = (text: string) => {
      dispatch(inpuitNameAction(text))
      setText(text)
   }

   return (
      <div className="form-wrapper">
         <form action="#" onSubmit={formSubmit}>
            <label>
               <input
                  value={text}
                  type="text"
                  onChange={(event) => inputText(event.target.value)}
               />
               <button></button>
            </label>
         </form>
      </div>
   )
}
