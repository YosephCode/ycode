<form>
    <h2 class="label">Talk with me!</h2>
            
    <div class="mostrarComments"><input type="checkbox" ng-model="mostra"><span class="verComments">See comments</span></div><br>
    
   
    <div class="angular-comentario" ng-repeat="y in ycodes" ng-show="mostra">
        <span><strong class="span-name">{{y.name}}</strong></span> || <span class="span-email">{{y.email}}</span><br>
        <span class="span.comentario">{{y.comentario}}</span><br /> <span class="comment-data">{{ y.id | date : 'dd/MM/yyyy - h:mm:ss'}}</span>
        <hr>
        <br>
    </div>
    <br>

    <label>Name</label>
    <input type="text" ng-model="commentname" class="nome" required>
    <div class="hint">Escreva apenas o seu primeiro nome</div>
    <label>Email</label>
    <input type="email" ng-model="commentemail" class="email" required>
    <div class="hint">Exemplo: meuemail@meuemail.com</div>
    <label>Message</label>
    <textarea class="textearea" ng-model="commentcomentario" required maxlength="800" onkeyup="resizeTextarea('InputTextArea')" id="InputTextArea"></textarea>
    <div class="red hint">Preencher os três campos para adicionar seu comentário na página.</div>
    <br>
    <input type="submit" name="Submit" ng-click="addComment()" ng-disabled="!(commentname && commentemail && commentcomentario)" class="sbmt" value="Submit" />
</form> 

