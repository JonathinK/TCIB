import React from "react";

import { AccordionWrapper } from "../styles";
import { Accordion } from "../WorshipService/Accordion";

export const AccordionComponent = () => {
  return(
    <AccordionWrapper
        R="2/3"
        C="5/11"
        TR="2/3"
        TC="2/10"
        MR="2/3"
        MC="2/6"
      >
        <Accordion
          title="Where do I park?"
          answer="You make a left onto Rankin Rd and another left into the back of the church where you will find a convenient area for parking. If there isn't enough spaces then you may park on Rankin Rd or where ever you can find parking."
        />
        <Accordion
          title="Do you have Disability Access?"
          answer="We have a wheelchair accessible ramp in the back lot area of our church. There is a wheelchair friendly ramp that leads up to the church. We have accessible buttons to open the doors and we even have spaces inside our church for wheelchairs."
        />
        <Accordion
          title="What time does service start?"
          answer="Service starts at 10AM on Sundays. We recommend coming at-least 20-30 min early for fellowship, which is after service as well."
        />
        <Accordion
          title="How long does service typically run?"
          answer="Service will generally last for an hour."
        />
        <Accordion
          title="What should I wear?"
          answer="We always want you to feel comfortable at our church. You will see business casual, suits and even pants with a polo or t-shirt."
        />
        <Accordion
          title="What about my kids?"
          subtitle="Older Kids"
          answer="We feature a vibrant Sunday School program tailored for kids aged X to Y? We use a bible based, Montessori type program that really involves the kids in the bible stories."
          subtitletwo="Younger Kids"
          answertwo="We also have a fun nursery program for the younger children and an outdoor play space so that when the weather is good, the kids can play in a safe and enclosed play area. The nursery program always includes a couple of youth supervisors to keep things in good order."
        />
        <Accordion
          title="Do I have to participate at service?"
          answer="Absolutely not, we don’t  expect anyone to ever put themselves in a position that makes them feel uncomfortable. But if or when you area ready, we encourage you to participate in service. We want our house of worship to be your house of worship."
        />
      </AccordionWrapper>
  )
}