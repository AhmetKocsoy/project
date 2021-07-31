import {useEffect, useState} from "react";

export default function Deneme({ baslik, children }) {
    const [sayi, setSayi] = useState(0);
    const [kare, setKare] = useState(0);

    const [metin, setMetin] = useState('');

    const [items, setItems] = useState(['A', 'B']);


    useEffect(() => {
        setKare(sayi * sayi);
    }, [sayi]);

    return (
      <div>
          Deneme {baslik}
          <br />
          Sayı: {sayi}
          <br />
          Kare: {kare}
          <br />
          Metin: {metin}
          <br />
          <button onClick={() => setSayi(sayi + 1)}>Artır</button>
          <br />
          <button onClick={() => setSayi(0)}>Reset</button>
          <br />
          <input value={metin} onChange={e => setMetin(e.target.value)}/>
          <br />
          <ul>
              {items.map(item => (
                  <li>{item}</li>
              ))}
          </ul>
          <br />
          {children}
      </div>
    );
}
