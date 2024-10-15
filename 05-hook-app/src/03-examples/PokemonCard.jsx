import { useLayoutEffect, useRef, useState } from "react"


export const PokemonCard = ({ id, name, sprites= []}) => {

  const pRef = useRef()
  const [boxSize, setboxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    const {height, width} = (pRef.current.getBoundingClientRect())
    setboxSize({height, width})
  
  }, [name])

  return (
    <>
    <section style={{height: 200}}>
        <h2 ref={pRef} className="text-capitalize">#{id} - {name}</h2>

        <div>
            {
                sprites.map(sprites => (
                    <img key={sprites} src={sprites} alt={name}/>
                ))
            }
        </div>

    </section>

    <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}

