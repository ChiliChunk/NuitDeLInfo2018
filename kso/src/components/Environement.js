import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MaterielAction from '../action/MaterielActions'




class Environnement extends React.Component {
  render(){
    return(
      <div>
      <h1>Guide de surive dans le desert</h1>
      <p>Lorsqu'à la suite d'un accident (voiture ensablée par exemple) on se trouve amené à continuer la route à pied, tout déplacement doit être mûrement réfléchi. En cas d'immobilisation d'un véhicule, il est recommandé de rester sur place, et de lancer des signaux de détresse : de jour, utiliser un miroir de signalisation, ou faire brûler des pneus (dans le désert, la fumée se voit de loin), et de nuit, démonter les phares et les braquer vers le ciel.
Si on décide malgré tout de continuer à pied, il est plus prudent de revenir sur ses traces plutôt que de couper. En période de lune, il vaut mieux marcher de nuit et se reposer le jour. En effet la pleine lune offre un très bon éclairage du fait de la pureté de l'air et de l'absence de nuages, et les yeux ne se fatiguent pas comme dans la journée. Lorsqu'il n'y a pas de lune, la meilleure solution consiste à éviter la marche de nuit, car on risque de se perdre beaucoup plus facilement, et de faire route au plus tard jusqu'à 10 ou 11 heures le matin, et pas avant 16 heures le soir. Autant que possible, marcher sur du dur plutôt que sur du sable, et contourner les dunes plutôt que les escalader, pour éviter de casser son rythme de marche.

Les chances de succès pour trouver une zone de passage et donc du secours sont grandement conditionnées par la quantité d'eau que l'on peut emporter. 10 litres d'eau portés sur le dos semblent un bon compromis entre le poids (plus le sac est lourd, plus on boit) et l'autonomie.

Pour ce qui est de l'orientation, et même dans le cas où l'on possède une boussole, le mieux est encore de baliser son chemin régulièrement par des cairns, et de ne pas se fier à sa mémoire. Dans le désert, on croit souvent se déplacer en ligne droite, alors qu'en réalité notre trajectoire décrit toujours une légère courbe, due au fait que l'on possède une jambe plus forte que l'autre (la jambe droite le plus souvent). La poussée plus importante qu'elle exerce sur le sol fait que l'on dévie imperceptiblement vers la gauche.

Pendant les heures les plus chaudes de la journée (entre 10 heures du matin et 16 heures), il est primordial de ne pas marcher et de s'abriter du soleil. S'il n'y a pas d'ombre disponible, et que l'on dispose d'une couverture de survie, la meilleure solution consiste à faire un trou dans le sable, et à s'y enterrer. En effet, le sable est toujours plus frais en profondeur, ce qui limite la transpiration. Une fois enterré, en laissant tout de même les bras et la tête libre, on se recouvre de la couverture de survie, face réfléchissante vers l'extérieur pour réfléchir les rayons du soleil. Il est toutefois intéressant de noter que les quelques animaux vivant en milieux désertiques ont le même comportement (s'enterrer durant les heures les plus chaudes) et que, avant de se glisser dans le trou que l'on vient de creuser, il faut s'assurer que l'on ne dérange ni scorpion, ni araignée, ni serpent dans son repos, ce qui pourrait s'avérer fatal au voyageur impruden</p>
</div>
    )
  }
}

function mapStateToProps (state) {
  return {
    store : state.appReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    MaterielAction: bindActionCreators(MaterielAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Environnement)
