export const metadata = {
  title: "Exclusão de conta — ZPay",
  description: "Saiba como solicitar a exclusão da sua conta e dados no aplicativo ZPay.",
};

export default function ExcluirContaPage() {
  return (
    <main
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "40px 20px",
        lineHeight: 1.6,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <h1>Exclusão de conta e dados — ZPay</h1>

      <p>
        Esta página explica como solicitar a exclusão da sua conta e dos dados
        associados ao aplicativo <strong>ZPay</strong>, conforme as diretrizes do
        Google Play.
      </p>

      <h2>Como solicitar a exclusão</h2>
      <p>
        Você pode excluir sua conta diretamente pelo aplicativo ZPay, acessando:
      </p>

      <ol>
        <li>Menu de configurações da conta</li>
        <li>Opção <strong>Excluir conta</strong></li>
        <li>Confirmação da solicitação</li>
      </ol>

      <p>
        Caso não consiga acessar o aplicativo, você também pode solicitar a
        exclusão enviando um e-mail para:
      </p>

      <p>
        <strong>fraternize.zpay@gmail.com.br</strong>
      </p>

      <p>
        No e-mail, informe o endereço de e-mail cadastrado na conta para que a
        solicitação possa ser localizada.
      </p>

      <h2>Prazo de processamento</h2>
      <p>
        A exclusão da conta e dos dados associados será realizada em até{" "}
        <strong>7 dias</strong> após a confirmação da solicitação.
      </p>

      <h2>Quais dados são excluídos</h2>
      <ul>
        <li>Informações de cadastro do usuário</li>
        <li>Histórico vinculado à conta</li>
        <li>Identificadores pessoais armazenados</li>
      </ul>

      <h2>Dados que podem ser mantidos</h2>
      <p>
        Alguns registros podem ser mantidos quando necessário para cumprimento
        de obrigações legais, regulatórias ou prevenção a fraudes, conforme
        descrito na Política de Privacidade do ZPay.
      </p>

      <h2>Mais informações</h2>
      <p>
        Para entender como tratamos seus dados pessoais, consulte nossa{" "}
        <a href="/privacidade">Política de Privacidade</a>.
      </p>

      <hr style={{ margin: "40px 0" }} />

      <p style={{ fontSize: 14, color: "#666" }}>
        Última atualização: fevereiro de 2026
      </p>
    </main>
  );
}
