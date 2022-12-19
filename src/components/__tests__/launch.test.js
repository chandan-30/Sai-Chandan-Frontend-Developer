import { render, screen, cleanup} from '@testing-library/react';
import Launch from '../Launch';



test('should render Launch component', () => {
    let typeValue = '';

    const getLaunch = (type) => {
        typeValue = type;
      }
    
    render(<Launch getlaunch={getLaunch}/>)
    const typeElement = screen.getByTestId('Launch-id')
    expect(typeElement).toBeInTheDocument();
})