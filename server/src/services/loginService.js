import prisma from '../lib/prisma.js'
import db from '../db/connection.js'

async function fazerLogin({ emailFuncionario, senhaFuncionario }) {
  return prisma.funcionario.findUnique({
    where: { emailfuncionario: emailFuncionario, senhafuncionario: senhaFuncionario }
  })
}

export {
  fazerLogin
};