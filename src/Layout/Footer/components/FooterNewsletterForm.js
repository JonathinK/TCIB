import React from 'react';
import { FooterFormLabel, FooterForm, FooterFormInput, FormSpan } from './styles';


const FooterNewsletterForm = () => {
  
  return(
    <FooterForm>
      <FormSpan LabelTitle>
        <FooterFormLabel for="email">Subscribe To Newsletter</FooterFormLabel>
      </FormSpan>
      <FormSpan EmailInput>
        <FooterFormInput
          EmailInputStyles
          type="text" 
          id="email" 
          placeholder='Your Email..'
          width="100%"
          padding=".5rem"
          radius="5px"
          border="1px solid"
          />
      </FormSpan>
      <FormSpan EmailSubmit>
        <FooterFormInput 
        SubmitButton
        type="submit" 
        value="send"
        width="auto"
        padding=".5rem 2rem"
        radius="5px"
         />
      </FormSpan>
    </FooterForm>
  )
}
export default FooterNewsletterForm