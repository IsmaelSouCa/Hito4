import type { IScreen, IComponent } from '../types/components.types';
import { Hero } from './ui/Hero';
import { Grid } from './ui/Grid';
import { Card } from './ui/Card';

interface RenderScreenProps {
    screenData : IScreen
}

function RenderComponent({ component } : { component: IComponent }) {
    switch (component.type) {
        case 'HERO':
            return <Hero {...component.props}/>
        case 'GRID':
            return <Grid {...component.props}/>
        case 'CARD':
            return (
                <div className='p-4'>
                    <Card {...component.props}/>
                </div>
            )
        default:
            return <h1>DEBES ACTUALIZAR</h1>
    }
}

export function RenderScreen({ screenData } : RenderScreenProps){
    return (
        <main>
            {screenData.body.map((component, index) => (
                <RenderComponent
                    key={index}
                    component={component}
                />
            ))}
        </main>
    )
}