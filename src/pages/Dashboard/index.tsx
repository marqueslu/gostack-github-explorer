import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/6452198?s=400&u=d4959ff50475be4a2abdb30163d9be3bfc3f9969&v=4"
            alt=""
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Mocked description</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/6452198?s=400&u=d4959ff50475be4a2abdb30163d9be3bfc3f9969&v=4"
            alt=""
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Mocked description</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/6452198?s=400&u=d4959ff50475be4a2abdb30163d9be3bfc3f9969&v=4"
            alt=""
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Mocked description</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
