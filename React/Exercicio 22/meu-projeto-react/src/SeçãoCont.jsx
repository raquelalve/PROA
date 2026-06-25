import { useState } from 'react';

const ContactSection = () => {
  const [dados, setDados] = useState({ nome: '', email: '', pedido: '' });

  const enviar = (e) => {
    e.preventDefault();
    alert(`Pedido de ${dados.nome} enviado com sucesso!`);
    console.log("Dados:", dados);
  };

  return (
    <section id="section4">
      <form id="div1_section4" onSubmit={enviar}>
        <label>Entre com o seu nome:</label>
        <input type="texto" value={dados.nome} onChange={e => setDados({...dados, nome: e.target.value})} />
        
        <label>Entre com o seu email:</label>
        <input type="email" value={dados.email} onChange={e => setDados({...dados, email: e.target.value})} />

        <input id="pedido" type="text" placeholder="faça seu pedido por aqui" 
               value={dados.pedido} onChange={e => setDados({...dados, pedido: e.target.value})} />
        <button type="submit">Enviar</button>
      </form>

      <div id="div2_section4">
        <p>Acesse também nossas redes sociais</p>
        <div className="container_img">
          <img src="../public/whats.png" alt="WhatsApp" style={{ width: "50%", height: "50px", objectFit: "cover" }}/>
          <img src="../public/face.png" alt="Facebook" style={{ width: "50%", height: "50px", objectFit: "cover" }}/>
          <img src="../public/insta.png" alt="Instagram" style={{ width: "50%", height: "50px", objectFit: "cover" }}/>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;