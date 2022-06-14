import User from './models/User'

const resolvers = {
  Query: {
    // Users
    getUsers: async () => {
      try {
        const users = await User.find({})

        return users
      } catch (err) {
        console.log(err)
      }
    },
    // getProduct: async (_, { id }) => {
    //   const product = await Product.findById(id)

    //   if (!product) {
    //     throw new Error('Product not found')
    //   }

    //   return product
    // },
  },

  Mutation: {
    // users
    newUser: async (_, { input }) => {
      try {
        const user = new User(input)

        const result = await user.save()

        return result
      } catch (err) {
        console.log(err)
      }
    },
    // updateProduct: async (_, { id, input }) => {
    //   let product = await Product.findById(id)

    //   if (!product) {
    //     throw new Error('Product not found')
    //   }

    //   product = await Product.findOneAndUpdate({ _id: id }, input, {
    //     new: true,
    //   })

    //   return product
    // },
    // deleteProduct: async (_, { id }) => {
    //   const product = await Product.findById(id)

    //   if (!product) {
    //     throw new Error('Producto no encontrado')
    //   }

    //   await Product.findOneAndDelete({ _id: id })

    //   return 'Producto eliminado'
    // },
  },
}

export { resolvers } ;