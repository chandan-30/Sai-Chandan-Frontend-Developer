import { render, screen, cleanup} from '@testing-library/react';
import Status from '../Status';



test('should render Status component', () => {
    let typeValue = '';

    const getStatus = (type) => {
        typeValue = type;
      }
    
    render(<Status getstatus={getStatus}/>)
    const typeElement = screen.getByTestId('Status-id')
    expect(typeElement).toBeInTheDocument();
})