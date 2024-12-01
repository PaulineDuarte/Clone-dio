import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson2} from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

import { useForm } from "react-hook-form";


import { Container, Title, Column,TitleCadastro,SubtitleCadastro,JaTenhoConta,SubtitleCriar, Row, Wrapper } from './styles';

const Cadastro = () => {
    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            // Primeira requisição para verificar se já existe um usuário com esse e-mail
            const { data } = await api.get(`/users?email=${formData.email}`);
            
            if (data.length) {
                // Se o usuário já existir, exibe uma mensagem de erro
                alert('E-mail já cadastrado. Tente outro.');
                return;
            }
    
            // Se não encontrar o e-mail, cria o novo usuário
            const newUser = {
                nome: formData.nome,
                email: formData.email,
                senha: formData.senha,
            };
    
            // Envia os dados para o backend (alterar de acordo com sua API)
            const response = await api.post('/users', newUser);
            console.log(response)
    
            if (response.status === 201) {
                // Caso o cadastro seja bem-sucedido, redireciona para a página de login
                alert('Cadastro realizado com sucesso!');
                navigate('/login');
            }
        } catch (e) {
            // Tratar erro de requisição ou outro erro
            console.error('Erro ao realizar o cadastro', e);
            alert('Ocorreu um erro ao realizar o cadastro. Tente novamente.');
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title> A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleCadastro>Comece agora gratis</TitleCadastro>
                <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome Completo" leftIcon={<MdPerson2/>} name="nome" control= {control}/>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                    <Row>
                    <SubtitleCriar>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleCriar>
                    </Row>
                    <Row>
                    <JaTenhoConta>
                    <Link to="/Login"> já tenho conta.
                    </Link>
                    <span onClick={handleClickSignIn}> Fazer login</span></JaTenhoConta>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }