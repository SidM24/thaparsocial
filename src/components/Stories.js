import React from 'react'
import story1 from '../Images/stories/story1.jpeg'
import story2 from '../Images/stories/story2.jpeg'
import story3 from '../Images/stories/story3.jpeg'
import story4 from '../Images/stories/story4.jpeg'
import story5 from '../Images/stories/story5.jpeg'
import story6 from '../Images/stories/story6.jpeg'

const Stories = () => {
    return (
        <div style={{ margin: '0px', padding: '0px', height: '100%', width: '100%', display: 'flex', justifyContent: 'space-around', padding: '0.3rem' }}>
            <div style={{ height: '100%' }}>
                <img src={story1} style={{ height: '100%', borderRadius: '1rem' }} />
                <p style={{ position: 'relative', marginTop: '-2.2rem', textAlign: 'center', color: 'white', fontSize: '20px', fontFamily: 'monospace', fontWeight: 'bold' }}>story 1</p>
            </div>

            <div style={{ height: '100%' }}>
                <img src={story2} style={{ height: '100%', borderRadius: '1rem' }} />
                <p style={{ position: 'relative', marginTop: '-2.2rem', textAlign: 'center', color: 'white', fontSize: '20px', fontFamily: 'monospace', fontWeight: 'bold' }}>story 2</p>
            </div>

            <div style={{ height: '100%' }}>
                <img src={story3} style={{ height: '100%', borderRadius: '1rem' }} />
                <p style={{ position: 'relative', marginTop: '-2.2rem', textAlign: 'center', color: 'white', fontSize: '20px', fontFamily: 'monospace', fontWeight: 'bold' }}>story 3</p>
            </div>

            <div style={{ height: '100%' }}>
                <img src={story4} style={{ height: '100%', borderRadius: '1rem' }} />
                <p style={{ position: 'relative', marginTop: '-2.2rem', textAlign: 'center', color: 'white', fontSize: '20px', fontFamily: 'monospace', fontWeight: 'bold' }}>story 4</p>
            </div>

            <div style={{ height: '100%' }}>
                <img src={story5} style={{ height: '100%', borderRadius: '1rem' }} />
                <p style={{ position: 'relative', marginTop: '-2.2rem', textAlign: 'center', color: 'white', fontSize: '20px', fontFamily: 'monospace', fontWeight: 'bold' }}>story 5</p>
            </div>

            <div style={{ height: '100%' }}>
                <img src={story6} style={{ height: '100%', borderRadius: '1rem' }} />
                <p style={{ position: 'relative', marginTop: '-2.2rem', textAlign: 'center', color: 'white', fontSize: '20px', fontFamily: 'monospace', fontWeight: 'bold' }}>story 6</p>
            </div>

        </div>
    )
}

export default Stories
