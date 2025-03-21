import React from 'react'

export default function MoveIdPage({params}:{
    params:{movieId: string};
})
 {
    console.log(params.movieId);
  return (
    <div>
        MoveIdPage
        {params.movieId}
    </div>
  )
}
