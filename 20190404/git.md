# Git 익히기

### 학습 목표

* 기초적인 Git 명령을 익힌다.
* 브랜치의 개념을 이해한다.
* GitHub flow를 이해한다.
* GitHub을 이용해서 PR을 할 수 있다.



##Git 기초 이해하기

### 1. Git의 개념

* Git ≠ Github
  * Git : 분산 버전 관리 시스템(Distributed Version Control System; DVCS)
  * Github : 포스팅하는 사이트 SNS와 같음
* Git(DVCS)을 사용하는 이유
  1. 협업할 때 깃을 사용하면 편함
  2. 이전 버젼으로 돌아갈 경우 편함
  3. History



### 2. Git 기본

#### a. 저장소(Repository)

* Git은 원격 저장소와 로컬 저장소 두 종류의 저장소를 제공함
  * **원격 저장소(Remote Repository)** : 파일이 원격 저장소 전용 서버에서 관리되며 여러 사람이 함께 공유하기 위한 저장소

  * **로컬 저장소(Local Repository)** : 내 PC에 파일이 저장되는 개인 전용 저장소

    * `.git`을 말함

      ```bash
      git init
      >> Initialized empty Git repository in /Users/soonhojang/Documents/myProject/temp/.git/ # 여기보면 .git에 깃 레포를 초기화 함
      ```

* 내 컴퓨터에 로컬 저장소를 만드는 방법은 두 가지가 있음

  1. 로컬 디렉토리를 저장소로 만들기
  2. 이미 만들어져 있는 원격 저장소를 로컬 저장소로 복사

#### b. 작업 트리(Working tree)

- 우리가 작업하는 공간을 working tree혹은 working dir이라고 부름
- 파일(소스코드)를 편집하거나 생성함

#### c. 커밋(Commit)

* 파일 및 폴더의 추가/변경 사항을 저장소에 기록, 게임의 세이브 포인트와 같음
  * 커밋을 하면 이전 커밋 상태부터 현재 상태까지의 변경 이력이 기록된 커밋(혹은 리비전)이 만들어짐
  * 커밋은 시간순으로 저장됨, 최근 커밋부터 거슬러 올라가면 과거 변경 이력과 내용을 알 수 있음
* 한 번 커밋하면 안전하게 로컬 저장소(내 컴퓨터의 .git)에 저장이 됨(내 컴퓨터가 살아있는 동안만 안전)
* 각 커밋에는 영문/숫자로 이루어진 40자리 고유 이름이 붙음
  * 저장소에선 이 40자리 이름을 보고 각 커밋을 구분하고 선택

#### d. 인덱스(Index)

*  커밋을 실행하기 전 저장소와 작업 트리 사이에 존재하는 공간

* **스테이지(stage)**는  커밋 작업 시 작업 트리에 있는 변경 사항(파일 상태)을 인덱스에 기록하는 행위를 뜻함, 스테이징이라고도 함

![worktree](https://backlog.com/git-tutorial/kr/img/post/intro/capture_intro1_4_1.png)



### 3. Git 저장소 만들기

- Git 저장소를 만드는 방법은 두 가지가 있음
  - 로컬 디렉토리를 저장소로 만들기
  - 이미 만들어져 있는 원격 저장소를 로컬 저장소로 복사

#### a. 로컬 디렉토리를 저장소로 만들기

* 원하는 디렉토리로 이동 후 `git init`을 시행하여 로컬 저장소를 만들어 줌

  ```bash
  cd /myproject/원하는_디렉토리
  git init
  ```
  * `git init` 을 하면 `.git`이라는 하위 디렉토리를 생성함

    * Git 폴더와 아닌 폴더의 차이는 `.git`이 있는지 없는지

    * `.git` 디렉토리에는 저장소에 필요한 뼈대 파일이 들어 있음

      ```bash
      tree -L #mac에는 트리가 없음, brew install tree로 설치해 줘야함
      >> . #.git의 디렉토리 구조
        ├── HEAD
        ├── branches
        ├── config
        ├── description
        ├── hooks
        │   ├── applypatch-msg.sample
        │   ├── commit-msg.sample
        │   ├── fsmonitor-watchman.sample
        │   ├── post-update.sample
        │   ├── pre-applypatch.sample
        │   ├── pre-commit.sample
        │   ├── pre-push.sample
        │   ├── pre-rebase.sample
        │   ├── pre-receive.sample
        │   ├── prepare-commit-msg.sample
        │   └── update.sample
        ├── info
        │   └── exclude
        ├── objects
        │   ├── info
        │   └── pack
        └── refs
            ├── heads
            └── tags
      ```

  * `git init`은 아직 어떤 프로젝트 파일도 관리하진 않음

* `git add`로 파일을 추가하고 `git commit`으로 커밋해주면 본격적인 파일 버전 관리를 시작할 수 있음

  * `git add`는 인덱스에 파일 상태를 `stage`함

  * 다음과 같은 과정으로 `add`시 해당 파일에 대한 객체가 생성됨을 확인할 수 있음

    ```bash
    echo "Hello" > hello.txt
    ls
    >> hello.txt #예제를 위한 파일 생성
    git add hello.txt
    cd .git
    tree
    >> .
      ├── HEAD
      ├── branches
      ├── config
      ├── description
      ├── hooks
      │   ├── applypatch-msg.sample
      │   ├── commit-msg.sample
      │   ├── fsmonitor-watchman.sample
      │   ├── post-update.sample
      │   ├── pre-applypatch.sample
      │   ├── pre-commit.sample
      │   ├── pre-push.sample
      │   ├── pre-rebase.sample
      │   ├── pre-receive.sample
      │   ├── prepare-commit-msg.sample
      │   └── update.sample
      ├── index
      ├── info
      │   └── exclude
      ├── objects
      │   ├── e9 # 다음과 같은 객체가 생성되었음을 확인할 수 있음
      │   │   └── 65047ad7c57865823c7d992b1d046ea66edf78
      │   ├── info
      │   └── pack
      └── refs
          ├── heads
          └── tags
    ```

#### b. 이미 만들어져 있는 원격 저장소를 로컬 저장소로 복사

* 다른 프로젝트에 참여(Contribute)하거나 내(혹은 다른) Git 저장소를 복사하고 싶을 때 `git clone` 명령어를 이용함

* `git clone`명령어를 실행하면 파일 뿐만 아니라 히스토리까지 전부 받아옴

  ```bash
  git clone https://github.com/snowjang24/프로젝트명
  ```

  * 현재 명령어를 수행하는 디렉토리에 `프로젝트명`으로 디렉토리를 생성하고 그 안에 프로젝트를 담음

  * 만약 이를 새로운 이름으로 클론하고 싶으면 아래와 같은 명령어를 수행하면 됨

    ```bash
    git clone https://github.com/snowjang24/프로젝트명 원하는_디렉토리명
    ```



### 4. Git Commit

#### a. Git Commit 기초

* 커밋은 파일 및 폴더의 추가/변경 사항을 저장소에 기록함
* `commit`명령어로 변경된 파일의 스냅샷을 커밋함 

* 워킹 디렉토리의 모든 파일은 네 종류로 나뉨

  * **Tracked(관리 대상)** : 이미 스냅샷에 포함돼 있는 파일, Git이 알고 있는 파일
    * **Modified(수정함)**
    * **Unmodified(수정하지 않음)**
    * **Staged(커밋으로 저장소에 기록할)**
  * **Untracked(관리 대상 아님)** : 나머지 파일 모두

* 파일 `Commit` **라이프 사이클(Life cycle)**

  * 클론을 하면 모든 파일은 Tracked이면서 Unmodified상태임
  * 여기서 어떤 파일을 수정하게 되면 Git은 해당 파일을 Modified상태로 인식
  * 커밋을 위해서는 이 Modified상태의 파일을 Staged 상태로 만들어야함
  * 그런 뒤 Staged 상태의 파일을 커밋함

  ![file lifecycle](https://git-scm.com/book/en/v2/images/lifecycle.png)