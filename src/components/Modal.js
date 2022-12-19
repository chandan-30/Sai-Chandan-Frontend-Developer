import React from 'react'
import '../styles/Modal.css';

// Modal component to display details of a capsule on click of card element

function Modal({object}) {
    let arr = [];
    for(let item in object){
        if(item === 'missions'){
            for(let sub in object[item]){
                arr.push(['mission-name', object[item][sub]['name']])
                arr.push(['mission-flight', object[item][sub]['flight']])
            }
            
        } else {
            arr.push(
                [item, object[item]]
            )
        }
        
    }
  return (
    <>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content md-cnt">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
    
                    </div>
                    <div className="modal-body">

                    <table className="table table-borderless">
                        <tbody>
                            {
                                arr.map( (item) => {
                                    return <tr key={item}>
                                        {
                                            item.map( (ele, index) => {
                                                return <td key={ele} className={'span'+index}>{ele}</td>
                                            })
                                        }
                                    </tr>
                                })
                            }
                            </tbody>
                        </table>
                    
                    </div>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal