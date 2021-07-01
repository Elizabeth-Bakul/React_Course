  
import React from 'react';
import { CheckoutStyleWrap, CheckoutStyleLabel, CheckoutStyleInput } from '../Style/CheckoutStyle';

export function Toppings({ toppings, checkToppings }) {
  return (
    <>
      <h3>Добавки</h3>
      <CheckoutStyleWrap>
        {toppings.map((item, i) => (
          <CheckoutStyleLabel key={i}>
            <CheckoutStyleInput type="checkbox" checked={item.checked} onChange={() => checkToppings(i)} />
            {item.name}
          </CheckoutStyleLabel>
        ))}
      </CheckoutStyleWrap>
    </>
  );
}