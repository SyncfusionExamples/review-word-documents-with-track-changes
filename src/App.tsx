import React from 'react';
import {DocumentEditorContainerComponent, Toolbar, Inject} from '@syncfusion/ej2-react-documenteditor';
import './App.css';

function App() {
  let editorObj:DocumentEditorContainerComponent | null;
  const onBtnClick=()=>{
    editorObj?.documentEditor.revisions.get(1).accept();
  }
  const nextRevision=()=>{
    editorObj?.documentEditor.selection.navigateNextRevision();
  }
  const prevRevision=()=>{
    editorObj?.documentEditor.selection.navigatePreviousRevision();
  }
  const protection=()=>{
    editorObj?.documentEditor.editor.enforceProtection("123", "RevisionsOnly");
  }
  const removeProtection=()=>{
    editorObj?.documentEditor.editor.stopProtection("123");
  }
  return (
    <div className="App">
     <button onClick={onBtnClick} style={{marginBottom:10}}>Accept</button>
     <button onClick={nextRevision} style={{marginBottom:10,marginLeft:5}}>Next</button>
     <button onClick={prevRevision} style={{marginBottom:10,marginLeft:5}}>Previous</button>
     <button onClick={protection} style={{marginBottom:10,marginLeft:5}}>Revision only</button>
     <button onClick={removeProtection} style={{marginBottom:10,marginLeft:5}}>Stop protection</button>
     <DocumentEditorContainerComponent height='590' ref={(ins=>editorObj=ins)}
      enableToolbar={true} enableTrackChanges={true}
      showPropertiesPane={false}
      serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/">
      <Inject services={[Toolbar]}></Inject>
     </DocumentEditorContainerComponent>
    </div>
  );
}

export default App;
