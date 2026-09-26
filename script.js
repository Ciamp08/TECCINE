const carrosseis = document.querySelectorAll(".carrossel");

carrosseis.forEach(function(carrossel) {

    const cards = carrossel.querySelector(".cards");
    const esquerda = carrossel.querySelector(".esquerda");
    const direita = carrossel.querySelector(".direita");

    if (!cards || !esquerda || !direita) {
        return;
    }

    direita.addEventListener("click", function() {

        cards.scrollBy({
            left: 500,
            behavior: "smooth"
        });

    });

    esquerda.addEventListener("click", function() {

        cards.scrollBy({
            left: -500,
            behavior: "smooth"
        });

    });

});

// ===============================
// PÁGINA DE DETALHES DOS FILMES
// ===============================

const parametrosFilme = new URLSearchParams(window.location.search);
const filmeSelecionado = parametrosFilme.get("filme");

const filmes = {

    "a-teoria-de-tudo": {

    titulo: "A Teoria de Tudo",

    capa: "capas/a-teoria-de-tudo.jpg",

    descricao:
        "O filme acompanha a trajetória de Stephen Hawking e sua relação com a ciência, a família e os desafios de sua vida acadêmica e pessoal.",

    relacao:
        "A história apresenta temas relacionados à comunicação, relacionamento interpessoal, expressão de ideias, adaptação, trabalho em equipe e superação de desafios.",

    video: "a-teoria-de-tudo.mp4"
},
"o-discurso-do-rei": {

    titulo: "O Discurso do Rei",

    capa: "capas/o-discurso-do-rei.jpg",

    descricao:
        "O filme acompanha o rei George VI e seu esforço para superar dificuldades de fala antes de assumir importantes responsabilidades públicas.",

    relacao:
        "A história apresenta temas relacionados à comunicação, expressão oral, comunicação pública, confiança, relacionamento interpessoal e desenvolvimento de habilidades.",

    video: "o-discurso-do-rei.mp4"
},
"o-informante": {

    titulo: "O Informante",

    capa: "capas/o-informante.jpg",

    descricao:
        "O filme acompanha um funcionário que decide revelar informações importantes sobre uma grande empresa e enfrenta as consequências de sua decisão.",

    relacao:
        "A história apresenta temas relacionados à comunicação empresarial, ética, divulgação de informações, relacionamento profissional e responsabilidade na comunicação.",

    video: "o-informante.mp4"
},
"o-primeiro-homem": {

    titulo: "O Primeiro Homem",

    capa: "capas/o-primeiro-homem.jpg",

    descricao:
        "O filme acompanha Neil Armstrong e os acontecimentos relacionados ao programa espacial americano que culminaram na missão Apollo 11.",

    relacao:
        "A história apresenta temas relacionados à comunicação entre equipes, troca de informações, planejamento, trabalho em equipe e tomada de decisões.",

    video: "o-primeiro-homem.mp4"
},
"o-terminal": {

    titulo: "O Terminal",

    capa: "capas/o-terminal.jpg",

    descricao:
        "O filme acompanha Viktor Navorski, que fica preso em um aeroporto e precisa lidar com diferentes pessoas e situações enquanto tenta resolver sua situação.",

    relacao:
        "A história apresenta temas relacionados à comunicação, atendimento ao público, relacionamento interpessoal, negociação, adaptação e resolução de problemas.",

    video: "o-terminal.mp4"
},
"o-aviador": {

    titulo: "O Aviador",

    capa: "capas/o-aviador.jpg",

    descricao:
        "O filme acompanha a trajetória de Howard Hughes, mostrando sua atuação na aviação, no cinema e nos negócios.",

    relacao:
        "A história apresenta temas relacionados à comunicação, liderança, negociação, relacionamento profissional, tomada de decisões e gestão de projetos.",

    video: "o-aviador.mp4"
},
"spotlight-segredos-revelados": {

    titulo: "Spotlight: Segredos Revelados",

    capa: "capas/spotlight-segredos-revelados.jpg",

    descricao:
        "O filme acompanha uma equipe de jornalistas que investiga informações e documentos para produzir uma reportagem sobre um caso de grande repercussão.",

    relacao:
        "A história apresenta temas relacionados à comunicação, pesquisa, apuração de informações, trabalho em equipe, organização de dados e responsabilidade na divulgação de informações.",

    video: "spotlight-segredos-revelados.mp4"
},
    "12-homens-e-uma-sentenca": {

    titulo: "12 Homens e uma Sentença",

    capa: "capas/12-homens-e-uma-sentenca.jpg",

    descricao:
        "O filme acompanha doze jurados que precisam analisar cuidadosamente as evidências de um caso antes de chegar a uma decisão.",

    relacao:
        "A história apresenta elementos relacionados ao trabalho em equipe, comunicação, análise de informações, argumentação, tomada de decisões e resolução de conflitos.",

    video: "12-homens-e-uma-sentenca.mp4"
},
"a-vida-secreta-de-walter-mitty": {

    titulo: "A Vida Secreta de Walter Mitty",

    capa: "capas/a-vida-secreta-de-walter-mitty.jpg",

    descricao:
        "O filme acompanha Walter Mitty, um homem que trabalha em uma revista e embarca em uma grande aventura ao sair da rotina e enfrentar novos desafios.",

    relacao:
        "A história apresenta temas relacionados à criatividade, planejamento, trabalho em equipe, tomada de decisões, resolução de problemas e desenvolvimento pessoal.",

    video: "a-vida-secreta-de-walter-mitty.mp4"
},
"duelo-de-titas": {

    titulo: "Duelo de Titãs",

    capa: "capas/duelo-de-titas.jpg",

    descricao:
        "O filme acompanha um treinador que precisa unir uma equipe de futebol americano marcada por conflitos e diferenças.",

    relacao:
        "A história apresenta temas relacionados à liderança, trabalho em equipe, comunicação, gestão de conflitos, cooperação e tomada de decisões.",

    video: "duelo-de-titas.mp4"
},
"erin-brockovich": {

    titulo: "Erin Brockovich",

    capa: "capas/erin-brockovich.jpg",

    descricao:
        "O filme acompanha Erin Brockovich, que começa a trabalhar em um escritório de advocacia e se envolve na investigação de um caso que afeta diversas pessoas de uma comunidade.",

    relacao:
        "A história apresenta pesquisa, organização de informações, comunicação, trabalho em equipe, resolução de problemas, persistência e tomada de decisões.",

    video: "erin-brockovich.mp4"
},
"estrelas-alem-do-tempo": {

    titulo: "Estrelas Além do Tempo",

    capa: "capas/estrelas-alem-do-tempo.jpg",

    descricao:
        "O filme acompanha três mulheres que trabalham na NASA e enfrentam desafios profissionais enquanto contribuem para um importante projeto espacial.",

    relacao:
        "A história apresenta temas relacionados ao trabalho em equipe, organização, resolução de problemas, comunicação, inovação, liderança e tomada de decisões.",

    video: "estrelas-alem-do-tempo.mp4"
},
"invictus": {

    titulo: "Invictus",

    capa: "capas/invictus.jpg",

    descricao:
        "O filme acompanha Nelson Mandela durante o período em que busca aproximar diferentes grupos da sociedade sul-africana por meio do esporte.",

    relacao:
        "A história apresenta temas relacionados à liderança, comunicação, trabalho em equipe, gestão de conflitos, união de pessoas e tomada de decisões.",

    video: "invictus.mp4"
},
"sociedade-dos-poetas-mortos": {

    titulo: "Sociedade dos Poetas Mortos",

    capa: "capas/sociedade-dos-poetas-mortos.jpg",

    descricao:
        "O filme acompanha um professor que utiliza métodos diferentes de ensino para incentivar seus alunos a desenvolverem seus próprios pensamentos e perspectivas.",

    relacao:
        "A história apresenta temas relacionados à comunicação, liderança, criatividade, trabalho em equipe, desenvolvimento de ideias e tomada de decisões.",

    video: "sociedade-dos-poetas-mortos.mp4"
},
"uma-mente-brilhante": {

    titulo: "Uma Mente Brilhante",

    capa: "capas/uma-mente-brilhante.jpg",

    descricao:
        "O filme acompanha John Nash, um matemático que desenvolve ideias inovadoras e enfrenta desafios ao longo de sua trajetória acadêmica e profissional.",

    relacao:
        "A história apresenta temas relacionados à criatividade, resolução de problemas, desenvolvimento de ideias, trabalho em equipe, comunicação e tomada de decisões.",

    video: "uma-mente-brilhante.mp4"
},
"coach-carter": {

    titulo: "Coach Carter",

    capa: "capas/coach-carter.jpg",

    descricao:
        "O filme acompanha um treinador que assume o comando de uma equipe de basquete escolar e estabelece regras para melhorar o desempenho dos jogadores dentro e fora das quadras.",

    relacao:
        "A história apresenta temas relacionados à liderança, disciplina, trabalho em equipe, organização, responsabilidade, definição de metas e tomada de decisões.",

    video: "coach-carter.mp4"
},
    "amor-por-contrato": {

    titulo: "Amor por Contrato",

    capa: "capas/amor-por-contrato.jpg",

    descricao:
        "O filme acompanha uma família aparentemente perfeita que se muda para uma nova vizinhança e passa a influenciar o comportamento de consumo das pessoas ao seu redor.",

    relacao:
        "A história permite observar estratégias de marketing, influência sobre consumidores, posicionamento de produtos, comportamento do consumidor e divulgação de marcas.",

    video: "amor-por-contrato.mp4"
},
"barbie": {

    titulo: "Barbie",

    capa: "capas/barbie.jpg",

    descricao:
        "O filme acompanha Barbie em uma jornada para compreender melhor o mundo real e sua própria identidade.",

    relacao:
        "A obra permite observar estratégias de marketing, construção de marca, posicionamento, identidade de produto, público-alvo e comunicação com os consumidores.",

    video: "barbie.mp4"
},
"do-que-as-mulheres-gostam": {

    titulo: "Do Que as Mulheres Gostam",

    capa: "capas/do-que-as-mulheres-gostam.jpg",

    descricao:
        "O filme acompanha um publicitário que passa por uma situação inesperada e começa a perceber melhor os pensamentos e desejos das consumidoras.",

    relacao:
        "A história permite discutir comportamento do consumidor, pesquisa de mercado, publicidade, criação de campanhas, comunicação e identificação das necessidades do público-alvo.",

    video: "do-que-as-mulheres-gostam.mp4"
},
"o-diabo-veste-prada": {

    titulo: "O Diabo Veste Prada",

    capa: "capas/o-diabo-veste-prada.jpg",

    descricao:
        "O filme acompanha Andy, uma jovem que começa a trabalhar em uma importante revista de moda e precisa se adaptar ao ambiente competitivo da empresa.",

    relacao:
        "A história apresenta elementos relacionados ao marketing de moda, construção de marcas, tendências, posicionamento, comunicação e comportamento do consumidor.",

    video: "o-diabo-veste-prada.mp4"
},
"o-show-de-truman": {

    titulo: "O Show de Truman",

    capa: "capas/o-show-de-truman.jpg",

    descricao:
        "O filme acompanha Truman, um homem que descobre que sua vida inteira está sendo transmitida como um programa de televisão.",

    relacao:
        "A obra permite discutir publicidade, exposição de marcas, influência sobre o público, construção de imagem, mídia e estratégias de comunicação.",

    video: "o-show-de-truman.mp4"
},
"no": {

    titulo: "No",

    capa: "capas/no.jpg",

    descricao:
        "O filme acompanha uma campanha publicitária criada durante o plebiscito chileno de 1988, mostrando os desafios de desenvolver uma comunicação capaz de alcançar e mobilizar o público.",

    relacao:
        "A obra apresenta elementos de marketing estratégico, como planejamento de campanhas, definição de público-alvo, criação de mensagens, comunicação, posicionamento e estratégias de divulgação.",

    video: "no.mp4"
},
"obrigado-por-fumar": {

    titulo: "Obrigado por Fumar",

    capa: "capas/obrigado-por-fumar.jpg",

    descricao:
        "O filme acompanha um porta-voz da indústria do tabaco que utiliza argumentos e estratégias de comunicação para defender os interesses de seu setor.",

    relacao:
        "A obra permite observar estratégias de comunicação, persuasão, construção de mensagens, relacionamento com o público e posicionamento de uma marca ou setor.",

    video: "obrigado-por-fumar.mp4"
},
"jerry-maguire": {

    titulo: "Jerry Maguire",

    capa: "capas/jerry-maguire.jpg",

    descricao:
        "O filme acompanha Jerry Maguire, um agente esportivo que decide mudar sua forma de trabalhar e passa a buscar uma relação mais próxima e pessoal com seus clientes.",

    relacao:
        "A história apresenta temas relacionados à construção de relacionamentos com clientes, atendimento, comunicação, posicionamento profissional, fidelização e desenvolvimento de uma marca pessoal.",

    video: "jerry-maguire.mp4"
},
    "a-rede-social": {

    titulo: "A Rede Social",

    capa: "capas/a-rede-social.jpg",

    descricao:
        "O filme acompanha a criação do Facebook e os acontecimentos envolvendo o desenvolvimento da plataforma e sua transformação em uma grande empresa de tecnologia.",

    relacao:
        "A história apresenta temas relacionados à inovação, empreendedorismo, desenvolvimento de negócios, tecnologia, criação de produtos e crescimento de uma empresa.",

    video: "a-rede-social.mp4"
},
"air-a-historia-por-tras-do-logo": {

    titulo: "Air: A História por Trás do Logo",

    capa: "capas/air-a-historia-por-tras-do-logo.jpg",

    descricao:
        "O filme acompanha a parceria entre a Nike e Michael Jordan e os esforços da empresa para criar uma nova linha de produtos esportivos.",

    relacao:
        "A história apresenta inovação, desenvolvimento de produtos, estratégias de negócios, negociação, empreendedorismo e criação de novas oportunidades no mercado.",

    video: "air-a-historia-por-tras-do-logo.mp4"
},
"blackberry": {

    titulo: "BlackBerry",

    capa: "capas/blackberry.jpg",

    descricao:
        "O filme acompanha a criação e o crescimento da BlackBerry, mostrando o desenvolvimento de seus produtos e os desafios enfrentados pela empresa no mercado de tecnologia.",

    relacao:
        "A história aborda inovação tecnológica, desenvolvimento de produtos, empreendedorismo, concorrência, gestão de negócios e adaptação às mudanças do mercado.",

    video: "blackberry.mp4"
},
"o-jogo-da-imitacao": {

    titulo: "O Jogo da Imitação",

    capa: "capas/o-jogo-da-imitacao.jpg",

    descricao:
        "O filme acompanha Alan Turing e sua equipe durante o desenvolvimento de uma máquina capaz de ajudar a decifrar mensagens codificadas durante a Segunda Guerra Mundial.",

    relacao:
        "A história apresenta inovação, tecnologia, resolução de problemas, desenvolvimento de soluções, trabalho em equipe e aplicação de conhecimentos para enfrentar desafios.",

    video: "o-jogo-da-imitacao.mp4"
},
"o-menino-que-descobriu-o-vento": {

    titulo: "O Menino que Descobriu o Vento",

    capa: "capas/o-menino-que-descobriu-o-vento.jpg",

    descricao:
        "O filme acompanha William Kamkwamba, um jovem que utiliza seus conhecimentos para desenvolver uma solução que ajuda sua comunidade durante um período de dificuldades.",

    relacao:
        "A história apresenta criatividade, inovação, desenvolvimento de soluções, uso de conhecimentos, resolução de problemas e iniciativa para transformar uma ideia em uma solução prática.",

    video: "o-menino-que-descobriu-o-vento.mp4"
},
"piratas-da-informatica": {

    titulo: "Piratas da Informática",

    capa: "capas/piratas-da-informatica.jpg",

    descricao:
        "O filme apresenta a trajetória de jovens envolvidos no surgimento das empresas que ajudaram a transformar a indústria dos computadores pessoais.",

    relacao:
        "A história aborda inovação tecnológica, empreendedorismo, desenvolvimento de produtos, concorrência, criatividade e transformação do mercado.",

    video: "piratas-da-informatica.mp4"
},
"steve-jobs": {

    titulo: "Steve Jobs",

    capa: "capas/steve-jobs.jpg",

    descricao:
        "O filme apresenta momentos da trajetória de Steve Jobs e os bastidores relacionados ao desenvolvimento e lançamento de alguns dos principais produtos da Apple.",

    relacao:
        "A história aborda inovação, desenvolvimento de produtos, empreendedorismo, liderança, tecnologia e estratégias para transformar ideias em negócios.",

    video: "steve-jobs.mp4"
},
"tetris": {

    titulo: "Tetris",

    capa: "capas/tetris.jpg",

    descricao:
        "O filme acompanha a trajetória de Henk Rogers na tentativa de conseguir os direitos para distribuir o jogo Tetris internacionalmente.",

    relacao:
        "A história apresenta inovação, propriedade intelectual, negociação, desenvolvimento de negócios, expansão internacional e estratégias comerciais.",

    video: "tetris.mp4"
},

    "a-grande-aposta": {

    titulo: "A Grande Aposta",

    capa: "capas/a-grande-aposta.jpg",

    descricao:
        "O filme apresenta a história de investidores que perceberam problemas no mercado imobiliário dos Estados Unidos antes da crise financeira de 2008.",

    relacao:
        "A obra permite compreender conceitos relacionados à análise de riscos, investimentos, mercado financeiro, tomada de decisões e gestão de recursos. Esses elementos estão relacionados à Gestão Financeira.",

    video: "a-grande-aposta.mp4"
},
"enron-os-mais-espertos-da-sala": {

    titulo: "Enron: Os Mais Espertos da Sala",

    capa: "capas/enron-os-mais-espertos-da-sala.jpg",

    descricao:
        "O documentário apresenta a ascensão e a queda da Enron, uma grande empresa de energia dos Estados Unidos, mostrando os acontecimentos que contribuíram para um dos maiores escândalos corporativos do país.",

    relacao:
        "A obra aborda temas como gestão financeira, análise de riscos, transparência, ética empresarial, controle financeiro e consequências de decisões relacionadas à administração de recursos.",

    video: "enron-os-mais-espertos-da-sala.mp4"
},
"o-contador": {

    titulo: "O Contador",

    capa: "capas/o-contador.jpg",

    descricao:
        "O filme acompanha um contador extremamente habilidoso que trabalha para organizações envolvidas em atividades ilegais e precisa lidar com situações de alto risco.",

    relacao:
        "A história apresenta elementos relacionados à contabilidade, análise financeira, controle de recursos, investigação de movimentações financeiras e tomada de decisões.",

    video: "o-contador.mp4"
},
"o-lobo-de-wall-street": {

    titulo: "O Lobo de Wall Street",

    capa: "capas/o-lobo-de-wall-street.jpg",

    descricao:
        "O filme acompanha a ascensão de Jordan Belfort no mercado financeiro e mostra sua trajetória no mundo das corretoras e dos investimentos.",

    relacao:
        "A obra apresenta temas relacionados ao mercado financeiro, investimentos, vendas, gestão de recursos, tomada de decisões e ética nas atividades financeiras.",

    video: "o-lobo-de-wall-street.mp4"
},
"o-homem-que-mudou-o-jogo": {

    titulo: "O Homem que Mudou o Jogo",

    capa: "capas/o-homem-que-mudou-o-jogo.jpg",

    descricao:
        "O filme acompanha Billy Beane, gerente de uma equipe de beisebol que utiliza estatísticas e análise de dados para encontrar jogadores e montar uma equipe competitiva com recursos limitados.",

    relacao:
        "A história apresenta análise de dados, planejamento, administração de recursos, controle de custos e tomada de decisões. Esses elementos podem ser relacionados à Gestão Financeira.",

    video: "o-homem-que-mudou-o-jogo.mp4"
},
"o-preco-do-amanha": {

    titulo: "O Preço do Amanhã",

    capa: "capas/o-preco-do-amanha.jpg",

    descricao:
        "O filme apresenta um futuro em que o tempo de vida das pessoas se tornou a principal forma de moeda, criando uma sociedade marcada por desigualdades econômicas.",

    relacao:
        "A história permite discutir conceitos relacionados ao dinheiro, desigualdade econômica, distribuição de recursos, consumo e funcionamento de sistemas financeiros.",

    video: "o-preco-do-amanha.mp4"
},
"trabalho-interno": {

    titulo: "Trabalho Interno",

    capa: "capas/trabalho-interno.jpg",

    descricao:
        "O documentário investiga as causas e os acontecimentos relacionados à crise financeira de 2008, analisando o funcionamento do sistema financeiro e suas consequências.",

    relacao:
        "A obra aborda temas como sistema financeiro, investimentos, riscos, regulamentação, gestão de recursos e decisões econômicas.",

    video: "trabalho-interno.mp4"
},
"wall-street-poder-e-cobica": {

    titulo: "Wall Street: Poder e Cobiça",

    capa: "capas/wall-street-poder-e-cobica.jpg",

    descricao:
        "O filme acompanha um jovem corretor que entra no mercado financeiro e passa a trabalhar sob a influência de um poderoso investidor.",

    relacao:
        "A história apresenta temas relacionados ao mercado financeiro, investimentos, negociação, administração de recursos, tomada de decisões e ética profissional.",

    video: "wall-street-poder-e-cobica.mp4"
},
    "apollo-13": {
        titulo: "Apollo 13",
        capa: "capas/apollo-13.jpg",

        descricao:
            "Apollo 13 acompanha uma missão espacial que enfrenta problemas inesperados durante sua viagem. A equipe precisa organizar recursos, tomar decisões rápidas e encontrar soluções para conseguir concluir a missão.",

        relacao:
            "O filme mostra a importância do planejamento, da organização dos recursos, do trabalho em equipe e da tomada de decisões diante de situações inesperadas. Esses elementos estão diretamente relacionados à Gestão de Operações.",

        video: "apollo-13.mp4"
    },

    "a-procura-da-felicidade": {
        titulo: "À Procura da Felicidade",
        capa: "capas/a-procura-da-felicidade.jpg",

        descricao:
            "O filme acompanha Chris Gardner, que enfrenta dificuldades financeiras enquanto busca construir uma vida melhor para ele e seu filho. Durante essa trajetória, ele enfrenta diversos desafios e precisa tomar decisões importantes para alcançar seus objetivos.",

        relacao:
            "O filme apresenta situações relacionadas ao planejamento, organização, administração de recursos, tomada de decisões e busca por soluções diante de dificuldades. Esses aspectos podem ser relacionados à Gestão de Operações.",

        video: "a-procura-da-felicidade.mp4"
    },
    "ford-vs-ferrari": {
    titulo: "Ford vs Ferrari",
    capa: "capas/ford-vs-ferrari.jpg",

    descricao:
        "O filme acompanha a equipe liderada por Carroll Shelby e o piloto Ken Miles na missão de construir um carro capaz de enfrentar a Ferrari nas 24 Horas de Le Mans.",

    relacao:
        "A história mostra planejamento, organização de processos, trabalho em equipe, gestão de recursos, desenvolvimento de soluções e tomada de decisões. Esses elementos estão relacionados à Gestão de Operações.",

    video: "ford-vs-ferrari.mp4"
},
"fome-de-poder": {
    titulo: "Fome de Poder",
    capa: "capas/fome-de-poder.jpg",

    descricao:
        "O filme conta a história de Ray Kroc e sua trajetória na transformação do McDonald's em uma grande rede de restaurantes.",

    relacao:
        "A história apresenta aspectos de Gestão de Operações, como padronização de processos, organização, eficiência, expansão, controle das operações e administração de recursos.",

    video: "fome-de-poder.mp4"
},
"joy-o-nome-do-sucesso": {
    titulo: "Joy: O Nome do Sucesso",
    capa: "capas/joy-o-nome-do-sucesso.jpg",

    descricao:
        "O filme acompanha Joy Mangano, uma mulher que enfrenta dificuldades pessoais e profissionais enquanto desenvolve uma ideia e busca transformá-la em um negócio de sucesso.",

    relacao:
        "A história apresenta aspectos relacionados à Gestão de Operações, como desenvolvimento de produtos, organização, produção, administração de recursos, planejamento e tomada de decisões.",

    video: "joy-o-nome-do-sucesso.mp4"
},
"naufrago": {
    titulo: "Náufrago",
    capa: "capas/naufrago.jpg",

    descricao:
        "O filme acompanha Chuck Noland, um funcionário que fica isolado em uma ilha após um acidente e precisa encontrar maneiras de sobreviver e organizar seus recursos.",

    relacao:
        "A história apresenta planejamento, administração de recursos limitados, organização, adaptação a situações inesperadas e tomada de decisões, aspectos relacionados à Gestão de Operações.",

    video: "naufrago.mp4"
},
"o-estagiario": {
    titulo: "O Estagiário",
    capa: "capas/o-estagiario.jpg",

    descricao:
        "O filme acompanha Ben Whittaker, um aposentado que decide começar uma nova experiência profissional como estagiário em uma empresa de comércio eletrônico.",

    relacao:
        "A história apresenta aspectos relacionados à organização do trabalho, adaptação a novos processos, relacionamento entre equipes, gestão de pessoas e funcionamento de uma empresa.",

    video: "o-estagiario.mp4"
},
"tempos-modernos": {
    titulo: "Tempos Modernos",
    capa: "capas/tempos-modernos.jpg",

    descricao:
        "O filme acompanha um trabalhador que enfrenta as dificuldades e as mudanças provocadas pelo trabalho industrial e pela mecanização das fábricas.",

    relacao:
        "A obra apresenta questões relacionadas à organização da produção, divisão do trabalho, produtividade, processos industriais e condições de trabalho, temas diretamente relacionados à Gestão de Operações.",

    video: "tempos-modernos.mp4"
},
"007-casino-royale": {

    titulo: "007 – Casino Royale",

    capa: "capas/007-casino-royale.jpg",

    descricao:
        "James Bond recebe a missão de enfrentar um poderoso financiador de organizações criminosas durante uma partida de pôquer de alto risco.",

    relacao:
        "Ação e aventura",

    video: "007-casino-royale.mp4"
},
"10-coisas-que-eu-odeio-em-voce": {

    titulo: "10 Coisas que Eu Odeio em Você",

    capa: "capas/10-coisas-que-eu-odeio-em-voce.jpg",

    descricao:
        "Uma estudante precisa lidar com as regras impostas por seu pai enquanto sua irmã mais nova tenta começar um relacionamento. Para que isso aconteça, um plano é criado envolvendo dois estudantes.",

    relacao:
        "Romance",

    video: "10-coisas-que-eu-odeio-em-voce.mp4"
},
"13-emenda": {

    titulo: "13ª Emenda",

    capa: "capas/13-emenda.jpg",

    descricao:
        "O documentário examina a relação entre a abolição da escravidão nos Estados Unidos, o sistema prisional e questões sociais e raciais ao longo da história do país.",

    relacao:
        "Documentário",

    video: "13-emenda.mp4"
},
"a-culpa-e-das-estrelas": {

    titulo: "A Culpa é das Estrelas",

    capa: "capas/a-culpa-e-das-estrelas.jpg",

    descricao:
        "O filme acompanha Hazel e Gus, dois jovens que se conhecem em um grupo de apoio e desenvolvem uma relação enquanto enfrentam desafios pessoais.",

    relacao:
        "Romance",

    video: "a-culpa-e-das-estrelas.mp4"
},
"a-espera-de-um-milagre": {

    titulo: "À Espera de um Milagre",

    capa: "capas/a-espera-de-um-milagre.jpg",

    descricao:
        "O filme acompanha um agente penitenciário que trabalha no corredor da morte e conhece um prisioneiro com características extraordinárias.",

    relacao:
        "Drama",

    video: "a-espera-de-um-milagre.mp4"
},
"a-freira": {

    titulo: "A Freira",

    capa: "capas/a-freira.jpg",

    descricao:
        "O filme acompanha uma freira e um padre enviados para investigar acontecimentos sobrenaturais em um antigo convento na Romênia.",

    relacao:
        "Terror",

    video: "a-freira.mp4"
},
"a-historia-sem-fim": {

    titulo: "A História Sem Fim",

    capa: "capas/a-historia-sem-fim.jpg",

    descricao:
        "O filme acompanha um garoto que encontra um livro mágico e é transportado para um mundo fantástico, onde precisa ajudar a salvar o reino de Fantasia.",

    relacao:
        "Fantasia",

    video: "a-historia-sem-fim.mp4"
},
"a-origem": {

    titulo: "A Origem",

    capa: "capas/a-origem.jpg",

    descricao:
        "O filme acompanha um especialista em invadir sonhos que recebe a missão de inserir uma ideia na mente de uma pessoa, enfrentando diferentes níveis de sonhos durante a operação.",

    relacao:
        "Ficção científica",

    video: "a-origem.mp4"
},
"a-viagem-de-chihiro": {

    titulo: "A Viagem de Chihiro",

    capa: "capas/a-viagem-de-chihiro.jpg",

    descricao:
        "O filme acompanha Chihiro, uma menina que entra em um mundo mágico e precisa encontrar uma maneira de salvar seus pais e voltar para casa.",

    relacao:
        "Animação",

    video: "a-viagem-de-chihiro.mp4"
},
"a-vida-e-bela": {

    titulo: "A Vida é Bela",

    capa: "capas/a-vida-e-bela.jpg",

    descricao:
        "O filme acompanha um pai que utiliza sua imaginação para proteger o filho das dificuldades e do medo durante um período de grande conflito.",

    relacao:
        "Drama",

    video: "a-vida-e-bela.mp4"
},
"alice-no-pais-das-maravilhas": {

    titulo: "Alice no País das Maravilhas",

    capa: "capas/alice-no-pais-das-maravilhas.jpg",

    descricao:
        "Alice segue um coelho branco e acaba entrando em um mundo fantástico, onde encontra personagens curiosos e vive uma série de aventuras.",

    relacao:
        "Fantasia",

    video: "alice-no-pais-das-maravilhas.mp4"
},
"as-aventuras-de-paddington": {

    titulo: "As Aventuras de Paddington",

    capa: "capas/as-aventuras-de-paddington.jpg",

    descricao:
        "Paddington, um jovem urso vindo do Peru, chega a Londres e encontra uma família que decide acolhê-lo. A partir daí, ele vive diversas aventuras enquanto tenta se adaptar à nova vida.",

    relacao:
        "Comédia",

    video: "as-aventuras-de-paddington.mp4"
},
"as-branquelas": {

    titulo: "As Branquelas",

    capa: "capas/as-branquelas.jpg",

    descricao:
        "Dois agentes do FBI precisam se disfarçar para proteger duas irmãs de uma ameaça. A missão acaba envolvendo situações inesperadas e muitas confusões.",

    relacao:
        "Comédia",

    video: "as-branquelas.mp4"
},
"as-cronicas-de-narnia-o-leao-a-feiticeira-e-o-guarda-roupa": {

    titulo: "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",

    capa: "capas/as-cronicas-de-narnia-o-leao-a-feiticeira-e-o-guarda-roupa.jpg",

    descricao:
        "Quatro irmãos atravessam um guarda-roupa mágico e chegam a Nárnia, um mundo fantástico onde encontram criaturas mágicas e se envolvem em uma batalha para ajudar a libertar o reino.",

    relacao:
        "Fantasia",

    video: "as-cronicas-de-narnia-o-leao-a-feiticeira-e-o-guarda-roupa.mp4"
},
"avatar": {

    titulo: "Avatar",

    capa: "capas/avatar.jpg",

    descricao:
        "Um ex-fuzileiro naval é enviado para Pandora e passa a participar de uma missão que envolve os habitantes do planeta e os interesses humanos em seus recursos.",

    relacao:
        "Ficção científica",

    video: "avatar.mp4"
},
"batman-o-cavaleiro-das-trevas": {

    titulo: "Batman: O Cavaleiro das Trevas",

    capa: "capas/batman-o-cavaleiro-das-trevas.jpg",

    descricao:
        "Batman enfrenta novos desafios em Gotham enquanto tenta combater o crime e proteger a cidade de uma ameaça que coloca seus limites à prova.",

    relacao:
        "Ação e aventura",

    video: "batman-o-cavaleiro-das-trevas.mp4"
},
"blade-runner-2049": {

    titulo: "Blade Runner 2049",

    capa: "capas/blade-runner-2049.jpg",

    descricao:
        "Um jovem policial descobre um segredo que o leva a procurar um antigo blade runner desaparecido, revelando informações que podem mudar a sociedade.",

    relacao:
        "Ficção científica",

    video: "blade-runner-2049.mp4"
},
"central-do-brasil": {

    titulo: "Central do Brasil",

    capa: "capas/central-do-brasil.jpg",

    descricao:
        "Uma ex-professora que escreve cartas para pessoas na estação Central do Brasil conhece um menino que procura pelo pai. Juntos, eles iniciam uma viagem pelo interior do país.",

    relacao:
        "Drama",

    video: "central-do-brasil.mp4"
},
"click": {

    titulo: "Click",

    capa: "capas/click.jpg",

    descricao:
        "Um arquiteto encontra um controle remoto capaz de controlar diferentes momentos de sua vida, mas começa a perceber as consequências de tentar acelerar ou evitar determinadas situações.",

    relacao:
        "Comédia",

    video: "click.mp4"
},
"clube-da-luta": {

    titulo: "Clube da Luta",

    capa: "capas/clube-da-luta.jpg",

    descricao:
        "Um homem insatisfeito com sua rotina conhece Tyler Durden e, juntos, acabam envolvidos na criação de um grupo secreto que transforma suas vidas.",

    relacao:
        "Drama",

    video: "clube-da-luta.mp4"
},
"como-eu-era-antes-de-voce": {

    titulo: "Como Eu Era Antes de Você",

    capa: "capas/como-eu-era-antes-de-voce.jpg",

    descricao:
        "Uma jovem começa a trabalhar como cuidadora de um homem que ficou paraplégico após um acidente. Com o tempo, os dois desenvolvem uma relação que transforma a vida de ambos.",

    relacao:
        "Romance",

    video: "como-eu-era-antes-de-voce.mp4"
},
"corra": {

    titulo: "Corra!",

    capa: "capas/corra.jpg",

    descricao:
        "Um jovem visita a família de sua namorada e começa a perceber comportamentos estranhos que o fazem desconfiar de que existe algo escondido por trás daquela visita.",

    relacao:
        "Terror",

    video: "corra.mp4"
},
"de-volta-para-o-futuro": {

    titulo: "De Volta para o Futuro",

    capa: "capas/de-volta-para-o-futuro.jpg",

    descricao:
        "Marty McFly viaja acidentalmente para o passado usando uma máquina do tempo construída por um cientista e precisa encontrar uma maneira de voltar para sua época.",

    relacao:
        "Ficção científica",

    video: "de-volta-para-o-futuro.mp4"
},
"debi-e-loide": {

    titulo: "Debi & Lóide",

    capa: "capas/debi-e-loide.jpg",

    descricao:
        "Dois amigos viajam pelo país para devolver uma maleta que encontraram por acaso, envolvendo-se em uma sequência de situações inesperadas e confusões.",

    relacao:
        "Comédia",

    video: "debi-e-loide.mp4"
},
"diario-de-uma-paixao": {

    titulo: "Diário de uma Paixão",

    capa: "capas/diario-de-uma-paixao.jpg",

    descricao:
        "Um homem lê para uma mulher uma história de amor sobre dois jovens que se conhecem durante o verão e enfrentam diferentes obstáculos ao longo da vida.",

    relacao:
        "Romance",

    video: "diario-de-uma-paixao.mp4"
},
"divertida-mente": {

    titulo: "Divertida Mente",

    capa: "capas/divertida-mente.jpg",

    descricao:
        "Riley é uma menina que precisa se adaptar a uma grande mudança em sua vida. Dentro de sua mente, suas emoções tentam ajudá-la a lidar com as novas situações.",

    relacao:
        "Animação",

    video: "divertida-mente.mp4"
},
"doutor-estranho": {

    titulo: "Doutor Estranho",

    capa: "capas/doutor-estranho.jpg",

    descricao:
        "Após sofrer um acidente que muda sua vida, um cirurgião busca novas formas de recuperar suas habilidades e acaba descobrindo um mundo ligado à magia e às artes místicas.",

    relacao:
        "Fantasia",

    video: "doutor-estranho.mp4"
},
"duna": {

    titulo: "Duna",

    capa: "capas/duna.jpg",

    descricao:
        "Paul Atreides viaja para o planeta Arrakis com sua família e se envolve em conflitos relacionados ao controle de um recurso extremamente valioso.",

    relacao:
        "Ficção científica",

    video: "duna.mp4"
},
"duna-parte-dois": {

    titulo: "Duna: Parte Dois",

    capa: "capas/duna-parte-dois.jpg",

    descricao:
        "Paul Atreides se une aos Fremen e busca enfrentar aqueles que destruíram sua família, enquanto tenta compreender seu papel no futuro de Arrakis.",

    relacao:
        "Ficção científica",

    video: "duna-parte-dois.mp4"
},
"duro-de-matar": {

    titulo: "Duro de Matar",

    capa: "capas/duro-de-matar.jpg",

    descricao:
        "Um policial fica preso em um arranha-céu durante uma situação de emergência e precisa encontrar maneiras de proteger as pessoas e enfrentar os acontecimentos.",

    categoria: "Ação e aventura",

    video: "duro-de-matar.mp4"
},
"edward-maos-de-tesoura": {

    titulo: "Edward Mãos de Tesoura",

    capa: "capas/edward-maos-de-tesoura.jpg",

    descricao:
        "Edward é uma criação artificial que vive isolada até ser levado para uma comunidade. Com suas mãos em forma de tesouras, ele passa a conviver com outras pessoas e enfrenta dificuldades para se adaptar.",

    categoria:
        "Fantasia",

    video: "edward-maos-de-tesoura.mp4"
},
"entre-facas-e-segredos": {

    titulo: "Entre Facas e Segredos",

    capa: "capas/entre-facas-e-segredos.jpg",

    descricao:
        "Após a morte de um famoso escritor, um detetive começa a investigar sua família e descobre uma série de segredos, contradições e suspeitos.",

    categoria:
        "Suspense e mistério",

    video: "entre-facas-e-segredos.mp4"
},
"escola-de-rock": {

    titulo: "Escola de Rock",

    capa: "capas/escola-de-rock.jpg",

    descricao:
        "Um músico que precisa encontrar uma forma de ganhar dinheiro acaba trabalhando como professor e transforma sua turma em uma banda de rock.",

    categoria:
        "Comédia",

    video: "escola-de-rock.mp4"
},
"forrest-gump": {

    titulo: "Forrest Gump",

    capa: "capas/forrest-gump.jpg",

    descricao:
        "O filme acompanha a vida de Forrest Gump, um homem que vive diferentes acontecimentos ao longo de sua trajetória enquanto mantém uma visão simples e determinada sobre a vida.",

    categoria:
        "Drama",

    video: "forrest-gump.mp4"
},
"free-solo": {

    titulo: "Free Solo",

    capa: "capas/free-solo.jpg",

    descricao:
        "O documentário acompanha o escalador Alex Honnold durante sua preparação para realizar uma escalada solo de uma das maiores paredes rochosas do mundo.",

    categoria:
        "Documentário",

    video: "free-solo.mp4"
},
"garota-exemplar": {

    titulo: "Garota Exemplar",

    capa: "capas/garota-exemplar.jpg",

    descricao:
        "Após o desaparecimento de sua esposa, um homem passa a ser investigado enquanto diferentes pistas e segredos sobre o relacionamento do casal começam a surgir.",

    categoria:
        "Suspense e mistério",

    video: "garota-exemplar.mp4"
},
"gente-grande": {

    titulo: "Gente Grande",

    capa: "capas/gente-grande.jpg",

    descricao:
        "Cinco amigos de infância se reencontram com suas famílias durante um fim de semana e acabam revivendo situações da juventude enquanto enfrentam novos desafios da vida adulta.",

    categoria:
        "Comédia",

    video: "gente-grande.mp4"
},
"gladiador": {

    titulo: "Gladiador",

    capa: "capas/gladiador.jpg",

    descricao:
        "Um general romano é traído e perde sua posição, tornando-se um gladiador. Enquanto luta nas arenas, ele busca justiça e enfrenta os responsáveis por sua queda.",

    categoria:
        "Ação e aventura",

    video: "gladiador.mp4"
},
"gravidade": {

    titulo: "Gravidade",

    capa: "capas/gravidade.jpg",

    descricao:
        "Durante uma missão espacial, dois astronautas ficam isolados no espaço após um acidente e precisam encontrar uma maneira de sobreviver e retornar à Terra.",

    categoria:
        "Ficção científica",

    video: "gravidade.mp4"
},
"halloween": {

    titulo: "Halloween",

    capa: "capas/halloween.jpg",

    descricao:
        "Anos após um acontecimento traumático, uma cidade volta a enfrentar uma ameaça quando Michael Myers retorna e começa a perseguir novas vítimas.",

    categoria:
        "Terror",

    video: "halloween.mp4"
},
"harry-potter-e-a-pedra-filosofal": {

    titulo: "Harry Potter e a Pedra Filosofal",

    capa: "capas/harry-potter-e-a-pedra-filosofal.jpg",

    descricao:
        "Harry Potter descobre que é um bruxo e começa a estudar em Hogwarts, onde faz novos amigos e descobre acontecimentos importantes sobre seu passado.",

    categoria:
        "Fantasia",

    video: "harry-potter-e-a-pedra-filosofal.mp4"
},
"hereditario": {

    titulo: "Hereditário",

    capa: "capas/hereditario.jpg",

    descricao:
        "Após a morte da avó, uma família começa a descobrir segredos sobre seu passado e acontecimentos estranhos que parecem estar ligados à sua história familiar.",

    categoria:
        "Terror",

    video: "hereditario.mp4"
},
"homem-aranha-atraves-do-aranhaverso": {

    titulo: "Homem-Aranha Através do Aranhaverso",

    capa: "capas/homem-aranha-atraves-do-aranhaverso.jpg",

    descricao:
        "Miles Morales se torna o Homem-Aranha e descobre que existem diferentes versões do herói. Ao lado delas, ele precisa aprender a controlar seus poderes e enfrentar uma nova ameaça.",

    categoria:
        "Animação",

    video: "homem-aranha-atraves-do-aranhaverso.mp4"
},
"homem-aranha-sem-volta-para-casa": {

    titulo: "Homem-Aranha: Sem Volta para Casa",

    capa: "capas/homem-aranha-sem-volta-para-casa.jpg",

    descricao:
        "Peter Parker pede ajuda para alterar as consequências de sua identidade revelada, mas o feitiço acaba causando acontecimentos que trazem novas ameaças para sua realidade.",

    categoria:
        "Ação e aventura",

    video: "homem-aranha-sem-volta-para-casa.mp4"
},
"ilha-do-medo": {

    titulo: "Ilha do Medo",

    capa: "capas/ilha-do-medo.jpg",

    descricao:
        "Um agente federal viaja para uma ilha onde funciona um hospital psiquiátrico para investigar o desaparecimento de uma paciente. Durante a investigação, ele começa a questionar o que está acontecendo no local.",

    categoria:
        "Suspense e mistério",

    video: "ilha-do-medo.mp4"
},
"indiana-jones-e-os-cacadores-da-arca-perdida": {

    titulo: "Indiana Jones e os Caçadores da Arca Perdida",

    capa: "capas/indiana-jones-e-os-cacadores-da-arca-perdida.jpg",

    descricao:
        "O arqueólogo Indiana Jones recebe a missão de encontrar a Arca da Aliança antes que ela caia nas mãos dos nazistas, enfrentando diversos desafios durante a busca.",

    categoria:
        "Ação e aventura",

    video: "indiana-jones-e-os-cacadores-da-arca-perdida.mp4"
},
"interestelar": {

    titulo: "Interestelar",

    capa: "capas/interestelar.jpg",

    descricao:
        "Em um futuro em que a Terra enfrenta graves problemas ambientais, um grupo de astronautas viaja pelo espaço em busca de um novo lugar onde a humanidade possa viver.",

    categoria:
        "Ficção científica",

    video: "interestelar.mp4"
},
"invocacao-do-mal": {

    titulo: "Invocação do Mal",

    capa: "capas/invocacao-do-mal.jpg",

    descricao:
        "Um casal de investigadores de fenômenos sobrenaturais é chamado para ajudar uma família que enfrenta acontecimentos estranhos em sua nova casa.",

    categoria:
        "Terror",

    video: "invocacao-do-mal.mp4"
},
"it-a-coisa": {

    titulo: "It: A Coisa",

    capa: "capas/it-a-coisa.jpg",

    descricao:
        "Um grupo de crianças enfrenta acontecimentos estranhos em sua cidade e precisa se unir para descobrir a origem da ameaça que está assustando os moradores.",

    categoria:
        "Terror",

    video: "it-a-coisa.mp4"
},
"john-wick": {

    titulo: "John Wick",

    capa: "capas/john-wick.jpg",

    descricao:
        "Um antigo assassino profissional é obrigado a voltar à ação após acontecimentos que interrompem sua vida tranquila, colocando-o novamente em contato com seu passado.",

    categoria:
        "Ação e aventura",

    video: "john-wick.mp4"
},
"jurassic-park": {

    titulo: "Jurassic Park",

    capa: "capas/jurassic-park.jpg",

    descricao:
        "Um grupo de visitantes conhece um parque onde dinossauros foram recriados por meio de engenharia genética. Quando o sistema de segurança falha, eles precisam encontrar uma maneira de escapar.",

    categoria:
        "Ação e aventura",

    video: "jurassic-park.mp4"
},
"kingsman-servico-secreto": {

    titulo: "Kingsman: Serviço Secreto",

    capa: "capas/kingsman-servico-secreto.jpg",

    descricao:
        "Um jovem é recrutado para uma organização secreta de espionagem e passa por um treinamento enquanto ajuda a enfrentar uma ameaça global.",

    categoria:
        "Ação e aventura",

    video: "kingsman-servico-secreto.mp4"
},
"la-la-land": {

    titulo: "La La Land",

    capa: "capas/la-la-land.jpg",

    descricao:
        "Uma aspirante a atriz e um músico de jazz se conhecem em Los Angeles e tentam conciliar seus sonhos profissionais com o relacionamento entre os dois.",

    categoria:
        "Romance",

    video: "la-la-land.mp4"
},
"legalmente-loira": {

    titulo: "Legalmente Loira",

    capa: "capas/legalmente-loira.jpg",

    descricao:
        "Elle Woods decide entrar na faculdade de Direito para provar que é capaz de alcançar seus objetivos e acaba descobrindo novas possibilidades para sua vida.",

    categoria:
        "Comédia",

    video: "legalmente-loira.mp4"
},
"mad-max-estrada-da-furia": {

    titulo: "Mad Max: Estrada da Fúria",

    capa: "capas/mad-max-estrada-da-furia.jpg",

    descricao:
        "Em um mundo pós-apocalíptico, Max se une a Furiosa e a um grupo de fugitivos em uma longa perseguição pelo deserto.",

    categoria:
        "Ação e aventura",

    video: "mad-max-estrada-da-furia.mp4"
},
"matrix": {

    titulo: "Matrix",

    capa: "capas/matrix.jpg",

    descricao:
        "Um programador descobre que a realidade em que vive é uma simulação e se envolve em uma luta para descobrir a verdade e enfrentar aqueles que controlam esse sistema.",

    categoria:
        "Ficção científica",

    video: "matrix.mp4"
},
"missao-impossivel-efeito-fallout": {

    titulo: "Missão: Impossível – Efeito Fallout",

    capa: "capas/missao-impossivel-efeito-fallout.jpg",

    descricao:
        "Ethan Hunt e sua equipe precisam recuperar materiais perigosos após uma missão dar errado, enfrentando uma corrida contra o tempo para impedir uma ameaça internacional.",

    categoria:
        "Ação e aventura",

    video: "missao-impossivel-efeito-fallout.mp4"
},
"nasce-uma-estrela": {

    titulo: "Nasce uma Estrela",

    capa: "capas/nasce-uma-estrela.jpg",

    descricao:
        "Um músico reconhece o talento de uma jovem cantora e ajuda a impulsionar sua carreira. Enquanto ela conquista espaço na música, os dois enfrentam desafios pessoais e profissionais.",

    categoria:
        "Romance",

    video: "nasce-uma-estrela.mp4"
},
"nimona": {

    titulo: "Nimona",

    capa: "capas/nimona.jpg",

    descricao:
        "Um cavaleiro acusado de um crime que não cometeu recebe a ajuda de Nimona, uma jovem capaz de mudar de forma. Juntos, eles tentam descobrir a verdade e enfrentar aqueles que os perseguem.",

    categoria:
        "Animação",

    video: "nimona.mp4"
},
"o-abutre": {

    titulo: "O Abutre",

    capa: "capas/o-abutre.jpg",

    descricao:
        "Um homem começa a trabalhar registrando imagens de acidentes e crimes para vender a emissoras de televisão. Aos poucos, ele passa a buscar acontecimentos cada vez mais impactantes para conseguir espaço na mídia.",

    categoria:
        "Suspense e mistério",

    video: "o-abutre.mp4"
},
"o-dilema-das-redes": {

    titulo: "O Dilema das Redes",

    capa: "capas/o-dilema-das-redes.jpg",

    descricao:
        "O documentário reúne depoimentos de especialistas e ex-profissionais de empresas de tecnologia para discutir o funcionamento das redes sociais e seus efeitos sobre o comportamento das pessoas.",

    categoria:
        "Documentário",

    video: "o-dilema-das-redes.mp4"
},
"o-exorcista": {

    titulo: "O Exorcista",

    capa: "capas/o-exorcista.jpg",

    descricao:
        "Uma família começa a enfrentar acontecimentos sobrenaturais envolvendo sua filha, levando dois padres a tentar compreender e lidar com a situação.",

    categoria:
        "Terror",

    video: "o-exorcista.mp4"
},
"o-exterminador-do-futuro-2": {

    titulo: "O Exterminador do Futuro 2",

    capa: "capas/o-exterminador-do-futuro-2.jpg",

    descricao:
        "Um jovem é protegido por um androide enviado do futuro enquanto uma nova máquina é enviada para eliminá-lo e impedir acontecimentos que podem mudar o futuro da humanidade.",

    categoria:
        "Ficção científica",

    video: "o-exterminador-do-futuro-2.mp4"
},
"o-hobbit-uma-jornada-inesperada": {

    titulo: "O Hobbit: Uma Jornada Inesperada",

    capa: "capas/o-hobbit-uma-jornada-inesperada.jpg",

    descricao:
        "Bilbo Bolseiro embarca em uma aventura ao lado de um grupo de anões e do mago Gandalf para recuperar o reino e o tesouro que foram tomados pelo dragão Smaug.",

    categoria:
        "Fantasia",

    video: "o-hobbit-uma-jornada-inesperada.mp4"
},
"o-iluminado": {

    titulo: "O Iluminado",

    capa: "capas/o-iluminado.jpg",

    descricao:
        "Um escritor aceita trabalhar como zelador de um hotel isolado durante o inverno e se muda para o local com sua família. Com o tempo, acontecimentos estranhos começam a afetar a rotina da família.",

    categoria:
        "Terror",

    video: "o-iluminado.mp4"
},
"o-labirinto-do-fauno": {

    titulo: "O Labirinto do Fauno",

    capa: "capas/o-labirinto-do-fauno.jpg",

    descricao:
        "Durante um período de conflitos na Espanha, uma menina encontra um misterioso labirinto e passa a viver uma série de acontecimentos que misturam fantasia e realidade.",

    categoria:
        "Fantasia",

    video: "o-labirinto-do-fauno.mp4"
},
"o-maskara": {

    titulo: "O Máskara",

    capa: "capas/o-maskara.jpg",

    descricao:
        "Um homem encontra uma misteriosa máscara que lhe dá poderes especiais e transforma completamente sua personalidade, levando-o a viver diversas situações inesperadas.",

    categoria:
        "Comédia",

    video: "o-maskara.mp4"
},
"o-menino-do-pijama-listrado": {

    titulo: "O Menino do Pijama Listrado",

    capa: "capas/o-menino-do-pijama-listrado.jpg",

    descricao:
        "Durante a Segunda Guerra Mundial, um garoto se muda com a família para uma região próxima a um campo de concentração e desenvolve uma amizade com outro menino que vive do outro lado da cerca.",

    categoria:
        "Drama",

    video: "o-menino-do-pijama-listrado.mp4"
},
"o-pianista": {

    titulo: "O Pianista",

    capa: "capas/o-pianista.jpg",

    descricao:
        "O filme acompanha um pianista judeu que tenta sobreviver durante a Segunda Guerra Mundial enquanto enfrenta as dificuldades e perseguições daquele período.",

    categoria:
        "Drama",

    video: "o-pianista.mp4"
},
"o-poderoso-chefao": {

    titulo: "O Poderoso Chefão",

    capa: "capas/o-poderoso-chefao.jpg",

    descricao:
        "O filme acompanha a família Corleone e as disputas envolvendo seus negócios e relações de poder, enquanto Michael Corleone se aproxima cada vez mais das atividades da família.",

    categoria:
        "Drama",

    video: "o-poderoso-chefao.mp4"
},
"o-rei-leao": {

    titulo: "O Rei Leão",

    capa: "capas/o-rei-leao.jpg",

    descricao:
        "Simba é um jovem leão que precisa enfrentar acontecimentos difíceis em sua vida e, com o tempo, compreender seu papel como futuro rei da savana.",

    categoria:
        "Animação",

    video: "o-rei-leao.mp4"
},
"o-senhor-dos-aneis-a-sociedade-do-anel": {

    titulo: "O Senhor dos Anéis: A Sociedade do Anel",

    capa: "capas/o-senhor-dos-aneis-a-sociedade-do-anel.jpg",

    descricao:
        "Frodo recebe a missão de levar um poderoso anel até um local onde ele possa ser destruído. Para ajudá-lo, um grupo de companheiros parte em uma jornada cheia de desafios.",

    categoria:
        "Fantasia",

    video: "o-senhor-dos-aneis-a-sociedade-do-anel.mp4"
},
"o-sexto-sentido": {

    titulo: "O Sexto Sentido",

    capa: "capas/o-sexto-sentido.jpg",

    descricao:
        "Um psicólogo infantil começa a acompanhar um garoto que afirma conseguir ver e conversar com pessoas que já morreram. Enquanto tenta ajudá-lo, o profissional também passa a descobrir aspectos importantes de sua própria vida.",

    categoria:
        "Suspense e mistério",

    video: "o-sexto-sentido.mp4"
},
"o-silencio-dos-inocentes": {

    titulo: "O Silêncio dos Inocentes",

    capa: "capas/o-silencio-dos-inocentes.jpg",

    descricao:
        "Uma jovem agente do FBI busca a ajuda de um prisioneiro especialista em comportamento criminal para auxiliar em uma investigação complexa.",

    categoria:
        "Suspense e mistério",

    video: "o-silencio-dos-inocentes.mp4"
},
"o-ultimo-samurai": {

    titulo: "O Último Samurai",

    capa: "capas/o-ultimo-samurai.jpg",

    descricao:
        "Um militar americano é enviado ao Japão para treinar soldados e acaba entrando em contato com a cultura dos samurais, passando por mudanças em sua visão sobre honra e tradição.",

    categoria:
        "Ação e aventura",

    video: "o-ultimo-samurai.mp4"
},
"orgulho-e-preconceito": {

    titulo: "Orgulho e Preconceito",

    capa: "capas/orgulho-e-preconceito.jpg",

    descricao:
        "Elizabeth Bennet vive com sua família e conhece o reservado Sr. Darcy. Entre diferenças de personalidade, expectativas sociais e mal-entendidos, os dois desenvolvem uma relação marcada por conflitos e sentimentos.",

    categoria:
        "Romance",

    video: "orgulho-e-preconceito.mp4"
},
"os-suspeitos": {

    titulo: "Os Suspeitos",

    capa: "capas/os-suspeitos.jpg",

    descricao:
        "Após o desaparecimento de duas meninas, um pai desesperado decide investigar por conta própria enquanto um detetive conduz a investigação oficial e busca descobrir o que realmente aconteceu.",

    categoria:
        "Suspense e mistério",

    video: "os-suspeitos.mp4"
},
"ps-eu-te-amo": {

    titulo: "P.S. Eu Te Amo",

    capa: "capas/ps-eu-te-amo.jpg",

    descricao:
        "Após perder o marido, uma jovem recebe cartas que ele deixou preparadas para ajudá-la a enfrentar o período de mudança e seguir em frente.",

    categoria:
        "Romance",

    video: "ps-eu-te-amo.mp4"
},
"panico": {

    titulo: "Pânico",

    capa: "capas/panico.jpg",

    descricao:
        "Uma jovem e seus amigos começam a receber ligações misteriosas e passam a ser perseguidos por uma pessoa usando uma máscara, enquanto tentam descobrir quem está por trás dos acontecimentos.",

    categoria:
        "Terror",

    video: "panico.mp4"
},
"pantera-negra": {

    titulo: "Pantera Negra",

    capa: "capas/pantera-negra.jpg",

    descricao:
        "Após a morte de seu pai, T'Challa retorna para Wakanda e precisa assumir suas responsabilidades como rei enquanto enfrenta um adversário que ameaça o futuro do país.",

    categoria:
        "Ação e aventura",

    video: "pantera-negra.mp4"
},
"para-todos-os-garotos-que-ja-amei": {

    titulo: "Para Todos os Garotos que Já Amei",

    capa: "capas/para-todos-os-garotos-que-ja-amei.jpg",

    descricao:
        "A vida de Lara Jean muda quando cartas de amor que ela escreveu secretamente para antigos paqueras são enviadas inesperadamente para eles.",

    categoria:
        "Romance",

    video: "para-todos-os-garotos-que-ja-amei.mp4"
},
"parasita": {

    titulo: "Parasita",

    capa: "capas/parasita.jpg",

    descricao:
        "Uma família que enfrenta dificuldades financeiras começa a trabalhar para uma família rica, mas a convivência entre os dois grupos acaba revelando diferenças sociais e situações inesperadas.",

    categoria:
        "Suspense e mistério",

    video: "parasita.mp4"
},
"piratas-do-caribe-a-maldicao-do-perola-negra": {

    titulo: "Piratas do Caribe: A Maldição do Pérola Negra",

    capa: "capas/piratas-do-caribe-a-maldicao-do-perola-negra.jpg",

    descricao:
        "O capitão Jack Sparrow se une a Will Turner para recuperar um navio e resgatar Elizabeth Swann, enfrentando uma tripulação de piratas que carrega uma antiga maldição.",

    categoria:
        "Ação e aventura",

    video: "piratas-do-caribe-a-maldicao-do-perola-negra.mp4"
},
"procurando-nemo": {

    titulo: "Procurando Nemo",

    capa: "capas/procurando-nemo.jpg",

    descricao:
        "Depois que seu filho Nemo é levado para longe de casa, Marlin atravessa o oceano em uma jornada para encontrá-lo, contando com a ajuda de novos amigos.",

    categoria:
        "Animação",

    video: "procurando-nemo.mp4"
},
"ratatouille": {

    titulo: "Ratatouille",

    capa: "capas/ratatouille.jpg",

    descricao:
        "Remy é um rato que sonha em se tornar um grande chef. Ao chegar a Paris, ele encontra uma oportunidade inesperada de mostrar seu talento na cozinha.",

    categoria:
        "Animação",

    video: "ratatouille.mp4"
},
"se-beber-nao-case": {

    titulo: "Se Beber, Não Case!",

    capa: "capas/se-beber-nao-case.jpg",

    descricao:
        "Três amigos viajam para Las Vegas para comemorar a despedida de solteiro, mas acordam no dia seguinte sem lembrar do que aconteceu e precisam descobrir onde está o noivo.",

    categoria:
        "Comédia",

    video: "se-beber-nao-case.mp4"
},
"senna": {

    titulo: "Senna",

    capa: "capas/senna.jpg",

    descricao:
        "O documentário acompanha a trajetória do piloto brasileiro Ayrton Senna, mostrando momentos importantes de sua carreira na Fórmula 1 e sua influência dentro e fora das pistas.",

    categoria:
        "Documentário",

    video: "senna.mp4"
},
"seven-os-sete-crimes-capitais": {

    titulo: "Seven: Os Sete Crimes Capitais",

    capa: "capas/seven-os-sete-crimes-capitais.jpg",

    descricao:
        "Dois detetives investigam uma série de crimes relacionados aos sete pecados capitais e precisam analisar pistas para descobrir quem está por trás dos acontecimentos.",

    categoria:
        "Suspense e mistério",

    video: "seven-os-sete-crimes-capitais.mp4"
},
"shrek": {

    titulo: "Shrek",

    capa: "capas/shrek.jpg",

    descricao:
        "Um ogro que vive tranquilamente em seu pântano precisa partir em uma aventura para recuperar seu lar e acaba conhecendo personagens que mudam sua vida.",

    categoria:
        "Animação",

    video: "shrek.mp4"
},
"simplesmente-acontece": {

    titulo: "Simplesmente Acontece",

    capa: "capas/simplesmente-acontece.jpg",

    descricao:
        "Alex e Rosie são amigos desde a infância e, ao longo dos anos, enfrentam mudanças, escolhas e acontecimentos que afetam o relacionamento entre os dois.",

    categoria:
        "Romance",

    video: "simplesmente-acontece.mp4"
},
"stardust-o-misterio-da-estrela": {
    titulo: "Stardust: O Mistério da Estrela",
    capa: "capas/stardust-o-misterio-da-estrela.jpg",
    descricao:
        "Um jovem parte em uma aventura para encontrar uma estrela que caiu do céu e acaba descobrindo um mundo mágico cheio de personagens e desafios.",
    categoria:
        "Fantasia",
    video: "stardust-o-misterio-da-estrela.mp4"
},
"titanic": {
    titulo: "Titanic",
    capa: "capas/titanic.jpg",
    descricao:
        "Rose e Jack se conhecem durante a viagem do Titanic e desenvolvem uma relação enquanto o navio enfrenta acontecimentos que mudam completamente a viagem.",
    categoria:
        "Romance",
    video: "titanic.mp4"
},
"todo-mundo-em-panico": {
    titulo: "Todo Mundo em Pânico",
    capa: "capas/todo-mundo-em-panico.jpg",
    descricao:
        "Um grupo de jovens se envolve em uma sequência de situações absurdas enquanto tenta descobrir quem está por trás de acontecimentos misteriosos.",
    categoria:
        "Comédia",
    video: "todo-mundo-em-panico.mp4"
},
"top-gun-maverick": {
    titulo: "Top Gun: Maverick",
    capa: "capas/top-gun-maverick.jpg",
    descricao:
        "Depois de muitos anos como piloto, Maverick retorna à escola Top Gun para treinar uma nova geração de pilotos e prepará-los para uma missão de grande importância.",
    categoria:
        "Ação e aventura",
    video: "top-gun-maverick.mp4"
},
"toy-story": {
    titulo: "Toy Story",
    capa: "capas/toy-story.jpg",
    descricao:
        "Woody é o brinquedo favorito de Andy até a chegada de Buzz Lightyear. Os dois precisam aprender a trabalhar juntos enquanto enfrentam diferentes situações e aventuras.",
    categoria:
        "Animação",
    video: "toy-story.mp4"
},
"um-lugar-silencioso": {
    titulo: "Um Lugar Silencioso",
    capa: "capas/um-lugar-silencioso.jpg",
    descricao:
        "Uma família tenta sobreviver em um mundo onde criaturas perigosas são atraídas por qualquer som. Para continuar viva, a família precisa permanecer em silêncio e encontrar maneiras de se comunicar.",
    categoria:
        "Terror",
    video: "um-lugar-silencioso.mp4"
},
"um-sonho-de-liberdade": {
    titulo: "Um Sonho de Liberdade",
    capa: "capas/um-sonho-de-liberdade.jpg",
    descricao:
        "Um homem é condenado à prisão e, ao longo dos anos, constrói uma amizade com outro detento enquanto busca maneiras de manter a esperança e conquistar sua liberdade.",
    categoria:
        "Drama",
    video: "um-sonho-de-liberdade.mp4"
},
"up-altas-aventuras": {
    titulo: "Up: Altas Aventuras",
    capa: "capas/up-altas-aventuras.jpg",
    descricao:
        "Carl Fredricksen decide realizar o sonho de viajar para a América do Sul e acaba embarcando em uma grande aventura ao lado de Russell.",
    categoria:
        "Animação",
    video: "up-altas-aventuras.mp4"
},
"wall-e": {
    titulo: "WALL-E",
    capa: "capas/wall-e.jpg",
    descricao:
        "WALL-E é um robô responsável por limpar a Terra, que ficou abandonada após ser coberta por lixo. Sua rotina muda quando ele encontra uma nova missão que pode ajudar a humanidade.",
    categoria:
        "Animação",
    video: "wall-e.mp4"
},
"zodiaco": {
    titulo: "Zodíaco",
    capa: "capas/zodiaco.jpg",
    descricao:
        "Um grupo de jornalistas e investigadores tenta descobrir a identidade de um criminoso que envia mensagens e pistas para os jornais, dando início a uma investigação que se estende por vários anos.",
    categoria:
        "Suspense e mistério",
    video: "zodiaco.mp4"
}
};


if (filmeSelecionado && filmes[filmeSelecionado]) {

    const filme = filmes[filmeSelecionado];

    document.getElementById("titulo-filme").textContent =
        filme.titulo;

    document.getElementById("capa-filme").src =
        filme.capa;

    document.getElementById("capa-filme").alt =
        filme.titulo;

    document.getElementById("descricao-filme").textContent =
        filme.descricao;

    if (filme.relacao) {

    document.getElementById("relacao-filme").textContent =
        filme.relacao;

} else if (filme.categoria) {

    document.getElementById("relacao-filme").textContent =
        filme.categoria;

}

if (filme.categoria) {

    document.getElementById("categoria-filme").textContent =
        "🎬 Gênero";

} else if (filme.relacao) {

    document.getElementById("categoria-filme").textContent =
        "📦 Relação com a matéria";

}
    document.querySelector(".botao-assistir").href =
        "player.html?video=" + filme.video;

}
// ================================
// PÁGINA DE GÊNEROS
// ================================

const parametrosGenero = new URLSearchParams(window.location.search);

const generoSelecionado = parametrosGenero.get("genero");


const nomesGeneros = {

    "acao-e-aventura": "Ação e aventura",

    "animacao": "Animação",

    "comedia": "Comédia",

    "documentario": "Documentário",

    "drama": "Drama",

    "fantasia": "Fantasia",

    "ficcao-cientifica": "Ficção científica",

    "romance": "Romance",

    "suspense-e-misterio": "Suspense e mistério",

    "terror": "Terror"

};


const tituloGenero = document.getElementById("titulo-genero");

const descricaoGenero = document.getElementById("descricao-genero");

const areaFilmesGenero = document.getElementById("filmes-genero");

const nenhumFilme = document.getElementById("nenhum-filme");


if (tituloGenero && areaFilmesGenero) {

    const nomeGenero = nomesGeneros[generoSelecionado];


    if (!nomeGenero) {

        tituloGenero.textContent = "🎬 Gênero não encontrado";

        descricaoGenero.textContent =
            "Volte para a página de gêneros e escolha uma opção.";

    } else {

        tituloGenero.textContent = "🎬 " + nomeGenero;

        descricaoGenero.textContent =
            "Filmes do gênero " + nomeGenero + ".";


        const filmesEncontrados = Object.entries(filmes).filter(
            function([slug, filme]) {

                return filme.categoria === nomeGenero;

            }
        );


        if (filmesEncontrados.length === 0) {

            nenhumFilme.style.display = "block";

        } else {

            nenhumFilme.style.display = "none";


            filmesEncontrados.forEach(
                function([slug, filme]) {

                    const card = document.createElement("div");

                    card.className = "card";


                    card.innerHTML = `
                        <a href="detalhes.html?filme=${slug}"
                           class="link-filme">

                            <div class="capa">

                                <img src="${filme.capa}"
                                     alt="${filme.titulo}">

                            </div>

                        </a>

                        <h3>${filme.titulo}</h3>
                    `;


                    areaFilmesGenero.appendChild(card);

                }
            );

        }

    }

}
// ================================
// FILMES DE AÇÃO
// ================================

const areaFilmesAcao = document.getElementById("filmes-acao");

if (areaFilmesAcao) {

    Object.entries(filmes).forEach(function([slug, filme]) {

        const categoria = filme.categoria || filme.relacao;

        if (categoria === "Ação e aventura") {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <a href="detalhes.html?filme=${slug}" class="link-filme">

                    <div class="capa">

                        <img src="${filme.capa}"
                             alt="${filme.titulo}">

                    </div>

                </a>

                <h3>${filme.titulo}</h3>
            `;

            areaFilmesAcao.appendChild(card);
        }

    });

}
// ================================
// FILMES DE ANIMAÇÃO
// ================================

const areaFilmesAnimacao = document.getElementById("filmes-animacao");

if (areaFilmesAnimacao) {

    Object.entries(filmes).forEach(function([slug, filme]) {

        const categoria = filme.categoria || filme.relacao;

        if (categoria === "Animação") {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <a href="detalhes.html?filme=${slug}" class="link-filme">

                    <div class="capa">

                        <img src="${filme.capa}"
                             alt="${filme.titulo}">

                    </div>

                </a>

                <h3>${filme.titulo}</h3>
            `;

            areaFilmesAnimacao.appendChild(card);
        }

    });

}
// ================================
// FILMES DE COMÉDIA
// ================================

const areaFilmesComedia = document.getElementById("filmes-comedia");

if (areaFilmesComedia) {

    Object.entries(filmes).forEach(function([slug, filme]) {

        const categoria = filme.categoria || filme.relacao;

        if (categoria === "Comédia") {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <a href="detalhes.html?filme=${slug}" class="link-filme">

                    <div class="capa">

                        <img src="${filme.capa}"
                             alt="${filme.titulo}">

                    </div>

                </a>

                <h3>${filme.titulo}</h3>
            `;

            areaFilmesComedia.appendChild(card);
        }

    });

}
// ================================
// FILMES DE DOCUMENTÁRIO
// ================================

const areaFilmesDocumentario = document.getElementById("filmes-documentario");

if (areaFilmesDocumentario) {

    Object.entries(filmes).forEach(function([slug, filme]) {

        const categoria = filme.categoria || filme.relacao;

        if (categoria === "Documentário") {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <a href="detalhes.html?filme=${slug}" class="link-filme">

                    <div class="capa">

                        <img src="${filme.capa}"
                             alt="${filme.titulo}">

                    </div>

                </a>

                <h3>${filme.titulo}</h3>
            `;

            areaFilmesDocumentario.appendChild(card);
        }

    });

}
// ================================
// FILMES DE DRAMA
// ================================

const areaFilmesDrama = document.getElementById("filmes-drama");

if (areaFilmesDrama) {

    Object.entries(filmes).forEach(function([slug, filme]) {

        const categoria = filme.categoria || filme.relacao;

        if (categoria === "Drama") {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <a href="detalhes.html?filme=${slug}" class="link-filme">

                    <div class="capa">

                        <img src="${filme.capa}"
                             alt="${filme.titulo}">

                    </div>

                </a>

                <h3>${filme.titulo}</h3>
            `;

            areaFilmesDrama.appendChild(card);
        }

    });

}
// ================================
// FILMES DE FANTASIA
// ================================

const areaFilmesFantasia = document.getElementById("filmes-fantasia");

if (areaFilmesFantasia) {

    Object.entries(filmes).forEach(function([slug, filme]) {

        const categoria = filme.categoria || filme.relacao;

        if (categoria === "Fantasia") {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <a href="detalhes.html?filme=${slug}" class="link-filme">

                    <div class="capa">

                        <img src="${filme.capa}"
                             alt="${filme.titulo}">

                    </div>

                </a>

                <h3>${filme.titulo}</h3>
            `;

            areaFilmesFantasia.appendChild(card);
        }

    });

}
// ================================
// FILMES DE FICÇÃO CIENTÍFICA
// ================================

const areaFilmesFiccao = document.getElementById("filmes-ficcao-cientifica");

if (areaFilmesFiccao) {

    Object.entries(filmes).forEach(function([slug, filme]) {

        const categoria = filme.categoria || filme.relacao;

        if (categoria === "Ficção científica") {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <a href="detalhes.html?filme=${slug}" class="link-filme">

                    <div class="capa">

                        <img src="${filme.capa}"
                             alt="${filme.titulo}">

                    </div>

                </a>

                <h3>${filme.titulo}</h3>
            `;

            areaFilmesFiccao.appendChild(card);
        }

    });

}
// ================================
// FILMES DE ROMANCE
// ================================

const areaFilmesRomance = document.getElementById("filmes-romance");

if (areaFilmesRomance) {

    Object.entries(filmes).forEach(function([slug, filme]) {

        const categoria = filme.categoria || filme.relacao;

        if (categoria === "Romance") {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <a href="detalhes.html?filme=${slug}" class="link-filme">

                    <div class="capa">

                        <img src="${filme.capa}"
                             alt="${filme.titulo}">

                    </div>

                </a>

                <h3>${filme.titulo}</h3>
            `;

            areaFilmesRomance.appendChild(card);
        }

    });

}
// ================================
// FILMES DE SUSPENSE E MISTÉRIO
// ================================

const areaFilmesSuspense = document.getElementById("filmes-suspense");

if (areaFilmesSuspense) {

    Object.entries(filmes).forEach(function([slug, filme]) {

        const categoria = filme.categoria || filme.relacao;

        if (categoria === "Suspense e mistério") {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <a href="detalhes.html?filme=${slug}" class="link-filme">

                    <div class="capa">

                        <img src="${filme.capa}"
                             alt="${filme.titulo}">

                    </div>

                </a>

                <h3>${filme.titulo}</h3>
            `;

            areaFilmesSuspense.appendChild(card);
        }

    });

}
// ================================
// FILMES DE TERROR
// ================================

const areaFilmesTerror = document.getElementById("filmes-terror");

if (areaFilmesTerror) {

    Object.entries(filmes).forEach(function([slug, filme]) {

        const categoria = filme.categoria || filme.relacao;

        if (categoria === "Terror") {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <a href="detalhes.html?filme=${slug}" class="link-filme">

                    <div class="capa">

                        <img src="${filme.capa}"
                             alt="${filme.titulo}">

                    </div>

                </a>

                <h3>${filme.titulo}</h3>
            `;

            areaFilmesTerror.appendChild(card);
        }

    });

}
// ================================
// BARRA DE PESQUISA
// ================================

const campoPesquisa = document.querySelector(".pesquisa input");
const botaoPesquisa = document.querySelector(".pesquisa button");

function pesquisarFilme() {

    const texto = campoPesquisa.value.trim().toLowerCase();

    if (texto === "") {
        return;
    }

    const resultado = Object.entries(filmes).find(
        function([slug, filme]) {

            return filme.titulo.toLowerCase().includes(texto);

        }
    );

    if (resultado) {

        const slug = resultado[0];

        window.location.href =
            "detalhes.html?filme=" + slug;

    } else {

        alert("Nenhum filme encontrado.");

    }

}


if (botaoPesquisa && campoPesquisa) {

    botaoPesquisa.addEventListener("click", pesquisarFilme);


    campoPesquisa.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            pesquisarFilme();

        }

    });

}