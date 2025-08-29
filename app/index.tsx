import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";

interface ModeloAtomico {
  nomeModelo: string,
  nomeAutor: string,
  anoPublicacao: number
}

export default function Index() {
  const [modeloCadastro, setModeloCadastro] = useState<ModeloAtomico>()
  const [modelos, setModelos] = useState<ModeloAtomico[]>([])

  const salvar = () => {

    if (!modeloCadastro?.nomeModelo) {
      Alert.alert('Atenção!', 'O nome do modelo não foi informado.');
      return;
    }

    if (!modeloCadastro?.nomeAutor) {
      Alert.alert('Atenção!', 'O nome do autor não foi informado.');
      return;
    }

    if (!modeloCadastro?.anoPublicacao) {
      Alert.alert('Atenção!', 'O ano de publicação não foi informado.');
      return;
    }

    const novosModelos = [...modelos, modeloCadastro]
    setModelos(novosModelos)
    setModeloCadastro(undefined)
  }

  return (
    <View style={{ padding: 15 }}>


      <View style={estilos.card}>

        <Text style={estilos.titulo}>Cadastro de modelos atômicos</Text>

        <View style={estilos.grupoInput}>
          <Text>Nome do modelo</Text>
          <TextInput
            placeholder="Nome do modelo"
            autoCapitalize="words"
            style={estilos.input} />
            value={modeloCadastro?.nomeModelo}
            {/* onChangeText={(valor) => setModeloCadastro((modeloCadastro) => ({ ...modeloCadastro, nome: valor }))} */}
        </View>

        <View style={estilos.grupoInput}>
          <Text>Nome do autor</Text>
          <TextInput
            placeholder="Nome do autor"
            autoCapitalize="words"
            style={estilos.input} />
            value={modeloCadastro?.nomeAutor}
        </View>

        <View style={estilos.grupoInput}>
          <Text>Ano de publicação</Text>
          <TextInput
            placeholder="Ano de publicação"
            keyboardType="number-pad"
            style={estilos.input} />
            value={`${modeloCadastro?.anoPublicacao}`}
        </View>

        <TouchableOpacity style={estilos.btn} onPress={salvar}>
          <Text style={estilos.txtBtnSalvar}>Salvar</Text>
        </TouchableOpacity>

      </View>


    </View>
  );
}

const estilos = StyleSheet.create({
  grupoInput: {
    marginTop: 10,
    gap: 5
  },
  card: {
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 15,

  },
  input: {
    borderWidth: 0.2,
    borderRadius: 5,
    paddingLeft: 10
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  btn: {
    padding: 10,
    marginTop: 15,
    paddingHorizontal: 15,
    backgroundColor: '#419b44',
    width: 'auto',
    borderRadius: 15,
    alignSelf: 'flex-end', 
  },
  txtBtnSalvar: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
}
)
