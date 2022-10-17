import React from "react";
import { SubTitle } from "../styles";

import { FormInput, FormLabel, FormSpan, FormText, FormWrapper, SiteForm, FormSubmitButton, ButtonWrapper } from "../styles/FormStyles";

export const ConnectionCard = () => {
  return( 
      <FormWrapper
        R="2/4"
        C="5/11"
        TC="2/10"
        MC="2/6"
        JS="center"
        AS="start"
      >
      <SiteForm name="Connection Card" method="POST" data-netlify="true" autoComplete="on">
        <FormInput type="hidden" name="Subject" value="Connection Card Information from TheChurchInBrielle.netlify.app"/>
        <FormSpan>
          <FormLabel name="first-name" >
            First Name*
              <FormInput 
              placeholder="Your name.." 
              type="text" 
              name="First-Name:" 
              required/>
          </FormLabel>
        </FormSpan>
        <FormSpan>
          <FormLabel>
            Last Name* 
            <FormInput 
            placeholder="Your last name.." 
            type="text" 
            name="Last-Name:" 
            required
            />
          </FormLabel>
        </FormSpan>
        <FormSpan>
          <FormLabel>
              Phone Number
              <FormInput 
              placeholder="(111)333-5555" 
              required 
              type="tel"
              name="Tel:"
              maxLength="14"
              inputMode="numeric"
              autoComplete="on"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
          </FormLabel>
        </FormSpan>
        <FormSpan>
          <FormLabel>
              Email*
              <FormInput 
                placeholder="Your email"
                autoComplete="on"
                name="Email:"
                />
          </FormLabel>
        </FormSpan>

        <FormSpan
          className="full-Width"
        >
          <FormLabel>
            Tell us more about yourself
            <FormText
              placeholder="Type here.."
              autoComplete="off"
              autoCorrect="on"
              autoCapitalize="word"
              type="text"
            />
          </FormLabel>
        </FormSpan>
        <div>
          <SubTitle>How did you hear of us?</SubTitle>  
            <FormLabel RadioWrapper>
              <FormInput Radio type="radio" name="radio"/>
              Family / Friends
            </FormLabel>
            <FormLabel RadioWrapper>
              <FormInput Radio type="radio" name="radio"/>
              Social Media
            </FormLabel>
            <FormLabel RadioWrapper>
              <FormInput Radio type="radio" name="radio"/>
              Online
            </FormLabel>
            <FormLabel RadioWrapper>
              <FormInput Radio type="radio" name="radio"/>
              Driving By
            </FormLabel>
            <FormLabel RadioWrapper>
              <FormInput Radio type="radio" name="radio"/>
              Other
            </FormLabel>
        </div> 
        <ButtonWrapper>
          <FormSubmitButton type="submit">Submit Card</FormSubmitButton>
        </ButtonWrapper>
      </SiteForm>
      </FormWrapper>
  )
}