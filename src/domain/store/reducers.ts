import { store, product } from 'domain/store/main';

export function updateCurrentPage(currentPage){
  return store.swap(oldState => ({...oldState, currentPage}))
}

export function updateProducts(data){
   return store.swap(oldstate => ({
    ...oldstate,
    products: data
  }))
}

export function updateAdditionLocation(location:string) {
  return store.swap(oldstate => ({
   ...oldstate,
   addition: {
     ...oldstate.addition,
     location: location
   }
 }))
}

export function updateGender(gender: string) {
  return store.swap(oldstate => ({
   ...oldstate,
      user: {
        ...oldstate.user,
        gender: gender
      }
  }));
}


export function updateCreationHead(head: product) {
  return store.swap(oldstate => ({
   ...oldstate,
      user: {
      ...oldstate.user,
      creation: {
        ...oldstate.user.creation,
        head: head
      }
    }
  }));
}

export function updateCreationTorso(torso: product) {
  return store.swap(oldstate => ({
   ...oldstate,
      user: {
      ...oldstate.user,
      creation: {
        ...oldstate.user.creation,
        torso: torso
      }
    }
  }));
}

export function updateCreationHips(hips: product) {
  return store.swap(oldstate => ({
   ...oldstate,
      user: {
      ...oldstate.user,
      creation: {
        ...oldstate.user.creation,
        hips: hips
      }
    }
  }));
}

export function updateCreationLegs(hips: product) {
  return store.swap(oldstate => ({
   ...oldstate,
      user: {
      ...oldstate.user,
      creation: {
        ...oldstate.user.creation,
        hips: hips
      }
    }
  }));
}

export function updateCreationFeet(feet: product) {
  return store.swap(oldstate => ({
   ...oldstate,
      user: {
      ...oldstate.user,
      creation: {
        ...oldstate.user.creation,
        feet: feet
      }
    }
  }));
}
