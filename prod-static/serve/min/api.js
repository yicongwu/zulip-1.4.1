/*

  The software provided in this file is offered under a variety of free and open
  source licenses. Unless otherwise specified, software is provided under the
  Apache License, Version 2.0, for which the following text applies:

    Copyright 2011-2016 Dropbox Inc. and contributors.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

  If some of the software in this file is offered under a different license,
  information about that license will appear in this file.
*/
$(function(){$('a[data-toggle="tab"]').on("shown",function(a){$("."+$(a.target).data("class")).show();$("."+$(a.relatedTarget).data("class")).hide()})});
