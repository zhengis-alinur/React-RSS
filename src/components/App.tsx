import React, { ReactElement } from 'react'
import { Form } from './Form'
import { Card } from './Card'

export const App = (): ReactElement => {
  return (
    <div>
      <Form is={false} />
      <Card />
    </div>
  )
}
