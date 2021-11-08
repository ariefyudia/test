const Validator = require("fastest-validator");

exports.rules = async (req, res) => {
    const post = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
      };
    
      const schema = {
        name: { type: "string"},
        email: { type: "string" },
        age: {type: "string", positive: true, integer: true, optional: true}
      };
    
      const v = new Validator();
      const validationResponse = v.validate(post, schema);
      // console.log(validationResponse);
      if (validationResponse !== true) {
        // console.log(validationResponse);
        return res.status(422).json({
          success: false,
          message: validationResponse,
          data: {},
        });
      }

      return post;
}
