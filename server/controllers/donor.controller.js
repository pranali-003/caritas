const DonorInfo = require('../models/donor.info');



// create a new donor
const createDonor = async(req,res)=>{
    try{
        
        const donor = await DonorInfo.create(req.body);
        res.status(200).json(donor);
        console.log('donor created');
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

// get all donors
const getDonors = async (req,res)=>{
    try{
        const donor =  await DonorInfo.find({});
        res.status(200).json(donor);

    }catch(error){
        res.status(500).json({message: error.message})
    }
}
// get donor by id

const getDonorById = async(req,res)=>{
    try{
        // fetch id from parameters 
        const {id} = req.params;
        const donor = await DonorInfo.findById(id);
        if(!donor){
           return  res.status(404).json({message: 'Donor not found.'});
        }
        res.json(donor);
    }catch(error){
        res.status(500).json({message: error.message})

    }
}

// update donor info

const updateDonor = async (req,res)=>{
    try{
        const {id} = req.params;
        const donor = await DonorInfo.findByIdAndUpdate(id,req.body); 
        if(!donor){
           return  res.status(404).json({message: "Requested donor not found"});
        }
        // check if updated is present 
        const updatedDonor = await DonorInfo.findById(id);
        res.status(200).json(updatedDonor);
        
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

// delete donor

const deleteDonor = async (req,res)=>{
    try{
        const {id} = req.params;
        const donor = await DonorInfo.findByIdAndDelete(id);
        if(!donor){
            return res.status(404).json({message: "Donor Not Found"});
        }
        res.status(500).json({message: "Donor deleted Successfully!"})
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const loginDonor = async (req, res) => {
    const { donor_username, donor_password } = req.body;
  
    try {
      // Check if user exists
      const user = await DonorInfo.findOne({ donor_username });
      if (!user) {
        return res.status(400).json({ message: 'User does not exist.' });
      }
  
      // Compare passwords
    //   const isMatch = await bcrypt.compare(password, user.password);
    //   if (!isMatch) {
    //     return res.status(400).json({ message: 'Invalid credentials.' });
    //   }
  
      // If login is successful, return user info or token (JWT)
      res.status(200).json({ 
        message: 'Login successful!', 
        user: {
          username: user.username,
          email: user.email,
          name: user.name,
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error.' });
    }
  };

module.exports ={
    createDonor,
    getDonors,
    getDonorById,
    updateDonor,
    deleteDonor,
    loginDonor
}