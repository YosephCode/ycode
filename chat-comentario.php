<article class="form" ng-controller="CommentListController">
    
    <form>
        <h2 class="label">Talk with me!</h2>
        <br>
        <!--<div class="angular-comentario" ng-repeat="u in users">-->
        <div class="angular-comentario" ng-repeat="y in ycodes">
            <span><strong class="span-name">{{y.name}}</strong></span> || <span class="span-email">{{y.email}}</span><br>
            <span class="span.comentario">{{y.comentario}}</span> <font class="comment-data">{{ y.id | date : 'dd/MM/yyyy - h:mm:ss'}}</font>
            <hr>
            <br>
        </div>
        <br>
        <!--
            <label>Name</label>
            <input type="text" ng-model="u.name" class="nome" required>
            <div class="hint">Escreva apenas o seu primeiro nome</div>
            <label>Email</label>
            <input type="email" ng-model="u.email" class="email" required>
            <div class="hint">Exemplo: meuemail@meuemail.com</div>
            <label>Message</label>
            <textarea class="textearea" ng-model="u.comentario" required></textarea>
            <div class="hint">É necessário preencher os três campos para adicionar seu comentário na página.</div>
            <br>
        -->
            <label>Name</label>
            <input type="text" ng-model="commentname" class="nome" required>
            <div class="hint">Escreva apenas o seu primeiro nome</div>
            <label>Email</label>
            <input type="email" ng-model="commentemail" class="email" required>
            <div class="hint">Exemplo: meuemail@meuemail.com</div>
            <label>Message</label>
            <textarea class="textearea" ng-model="commentcomentario" required></textarea>
            <div class="hint">É necessário preencher os três campos para adicionar seu comentário na página.</div>
            <br>
            <input type="submit" name="Submit" ng-click="addComment()" class="sbmt" value="Submit" />
            
            <!--
            <input type="submit" name="Submit" ng-click="adicionar(u)" ng-disabled="!(u.name && u.email && u.comentario)" class="sbmt" value="Submit" />
            -->
    </form> 
</article>
