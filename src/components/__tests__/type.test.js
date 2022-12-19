import { render, screen, cleanup} from '@testing-library/react';
import Type from '../Type';



test('should render Type component', () => {
    let typeValue = '';

    const getType = (type) => {
        typeValue = type;
      }
    
    render(<Type gettype={getType}/>)
    const typeElement = screen.getByTestId('Type-id')
    expect(typeElement).toBeInTheDocument();
})