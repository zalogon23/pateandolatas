import React, { useState, useRef } from 'react'
import { AlertDialog, AlertDialogOverlay, AlertDialogCloseButton, Button, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, AspectRatio, Image } from "@chakra-ui/react";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AlertDialogCard() {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)
  const open = () => setIsOpen(true)
  const leastDestructive = useRef();

  return (
    <>
      <Button colorScheme="red" onClick={open}>
        Ser parte
      </Button>

      <AlertDialog
        motionPreset="slideInBottom"
        isOpen={isOpen}
        leastDestructiveRef={leastDestructive}
        onClose={close}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogCloseButton />
            <AlertDialogHeader fontSize="xl" fontWeight="bold">
              ¿Quieres trabajar con nosotros?
            </AlertDialogHeader>

            <AlertDialogBody color="gray.500">
              <Image margin="auto" marginBottom="5" boxSize="12rem" fit="cover" borderRadius="full" src="https://www.cocinista.es/download/bancorecursos/ingredientes/ingredietrnte-comino-semilla.jpg" fallbackSrc="https://www.ecestaticos.com/image/clipping/4eb2fe1b771826cf037b432e11352dea/la-curiosa-historia-del-perro-que-ayudo-a-una-mujer-enferma-a-volver-a-mover-el-brazo.jpg" />
              Estamos buscando talentos que quieran demostrar su creatividad. Si te la pasas imaginando historietas que despues te parecen super entretenidas, escribinos. ¿Te pasa?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={leastDestructive} colorScheme="purple" onClick={close}>
                Si
              </Button>
              <Button onClick={close} ml={3}>
                No
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default AlertDialogCard
