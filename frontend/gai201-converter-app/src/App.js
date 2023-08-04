// import { Button, Select, Text, Textarea, VStack } from "@chakra-ui/react";

// import axios from "axios";
// import { useState } from "react";

// function App() {

//   const [gen, setGen] = useState("");

//   const [data, setData] = useState("");

//   // convert
//   const handleConvert = () => {
//     axios
//       .post(`https://gai-201-server-language-converter.vercel.app/code/${gen}`)

//       .then((res) => {
//         console.log(res.data);

//         setData(res.data);
//       })
//       .catch((error) => {
//         console.error(error);

//         setData("Error converter");
//       });
//   };

//   // debug
//   const handleDebug= () => {
//     axios
//       .post(`https://gai-201-server-language-converter.vercel.app/debugcode/${gen}`)

//       .then((res) => {
//         console.log(res.data);

//         setData(res.data);
//       })
//       .catch((error) => {
//         console.error(error);

//         setData("Error Debug");
//       });
//   };

//   // quality check

//   const handleQuality = () => {
//     axios
//       .post(`https://gai-201-server-language-converter.vercel.app/qualitycode/${gen}`)

//       .then((res) => {
//         console.log(res.data);

//         setData(res.data);
//       })
//       .catch((error) => {
//         console.error(error);

//         setData("Error Quality");
//       });
//   };

//   return (
//     <VStack
//       align="center"
//       bgGradient="linear(pink, teal.300, blue.400)"
//       spacing={4}
//       p={8}
//       borderRadius="md"
//     >
//       <Text fontWeight={600} fontSize="25px" color="purple.600">
//         Language Converter
//       </Text>

//       <Select w="50%" onChange={(e) => setGen(e.target.value)} bg="white">
//       <option value="">Select your Language</option>
//         <option value="Python">Python</option>
//         <option value="Java">Java</option>
//         <option value="javaScript">javaScript</option>
//         <option value="C">C Language</option>
//         <option value="C++">C++ Language</option>
//       </Select>

//       <Button onClick={handleConvert} bg="purple.600" color="white">
//         CONVERT
//       </Button>

//       <Button onClick={handleDebug} bg="purple.600" color="white">
//         DEBUG
//       </Button>

//       <Button onClick={handleQuality} bg="purple.600" color="white">
//         QUALITY CHECK
//       </Button>

//       {data && (

//         <Textarea
//           value={data}
//           rows={data.split("\n").length}
//           bg="white"
//           color="gray.800"
//           readOnly
//           resize="none"
//           width="50%"
//           textAlign="left"
//           borderRadius="md"
//           boxShadow="sm"
//           p={3}
//           style={{ backgroundColor: "white", color: "purple.600" }}
//         />
//       )}
//     </VStack>
//   );
// }

// export default App;

// gpt code

// import React, { useState } from "react";
// import axios from "axios";
// import {
//   ChakraProvider,
//   Box,
//   Heading,
//   FormControl,
//   FormLabel,
//   Select,
//   Textarea,
//   Button,
//   VStack,
// } from "@chakra-ui/react";

// function App() {
//   const [converterValue, setConverterValue] = useState("");
//   const [code, setCode] = useState("");
//   const [output, setOutput] = useState("");

//   const handleChange = (event) => {
//     setConverterValue(event.target.value);
//   };

//   const handleCodeChange = (event) => {
//     setCode(event.target.value);
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post(
//         `https://gai-201-server-language-converter.vercel.app/${converterValue}`,
//         {
//           code: code,
//         }
//       );
//       setOutput(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (

//       <Box p={5}>
//         <Heading mb={4}>Code Converter</Heading>
//         <VStack spacing={4} align="flex-start">
//           <FormControl id="converter">
//             <FormLabel>Select Converter Type</FormLabel>
//             <Select value={converterValue} onChange={handleChange}>
//               <option value="code/python">Python</option>
//               <option value="debugcode">Debug</option>
//               <option value="qualitycode">Quality</option>
//             </Select>
//           </FormControl>
//           <FormControl id="code">
//             <FormLabel>Enter Code</FormLabel>
//             <Textarea value={code} onChange={handleCodeChange} />
//           </FormControl>
//           <Button colorScheme="blue" onClick={handleSubmit}>
//             Convert
//           </Button>
//           <FormControl id="output">
//             <FormLabel>Output</FormLabel>
//             <Textarea value={output} isReadOnly />
//           </FormControl>
//         </VStack>
//       </Box>

//   );
// }

// export default App;

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Select,
  SimpleGrid,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [converterValue, setConverterValue] = useState("");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  // convert

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `https://gai-201-server-language-converter.vercel.app/code/${converterValue}`,
        {
          code: code,
        }
      );
      setOutput(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setConverterValue(event.target.value);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  // debug
  const handleDebug = async () => {
    try {
      const response = await axios.post(
        `https://gai-201-server-language-converter.vercel.app/debugcode`,
        {
          code: code,
        }
      );
      setOutput(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // quality check

  const handleQuality = async () => {
    try {
      const response = await axios.post(
        `https://gai-201-server-language-converter.vercel.app/qualitycode`,
        {
          code: code,
        }
      );
      setOutput(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Code Converter</Heading>
      <VStack spacing={4} align="flex-start">
        <FormControl id="converter">
          <FormLabel>Select Converter Type</FormLabel>
          <Select value={converterValue} onChange={handleChange}>
            <option value="">Select your Language</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="javaScript">javaScript</option>
            <option value="C">C Language</option>
            <option value="C++">C++ Language</option>
          </Select>
        </FormControl>
        <FormControl id="code">
          <FormLabel>Enter Code</FormLabel>
          <Textarea value={code} onChange={handleCodeChange} />
        </FormControl>

        <SimpleGrid columns={[1,3]} gap={'20px'}>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Convert
          </Button>

          <Button onClick={handleDebug} bg="purple.600" color="white">
            DEBUG
          </Button>

          <Button onClick={handleQuality} bg="purple.600" color="white">
            QUALITY CHECK
          </Button>
        </SimpleGrid>

        <FormControl id="output">
          <FormLabel>Output</FormLabel>
          <Textarea value={output} isReadOnly h={'200px'} />
        </FormControl>
      </VStack>
    </Box>
  );
}

export default App;
