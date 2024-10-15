import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { inpuitNameAction } from '../../faeture/form';
import { FormBlock, FormControl, FormField, FormLabel, FormWrapper } from './Form.styled';

import plusIcon from '../../assets/images/plus.png';

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
      <FormWrapper>
         <FormBlock action="#" onSubmit={formSubmit}>
            <FormLabel>
               <FormField
                  value={text}
                  type="text"
                  onChange={(event) => inputText(event.target.value)}
               />
               <FormControl icon={plusIcon}/>
            </FormLabel>
         </FormBlock>
      </FormWrapper>
   )
}
